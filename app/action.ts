/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

interface SubmissionResponse {
    success: boolean;
    message: string;
}

export async function submitContactForm(
    formData: ContactFormData,
): Promise<SubmissionResponse> {
    try {
        // Replace with your actual Google Apps Script Web App URL
        const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || '';

        // Validate input data
        if (!formData.name?.trim()) {
            return {
                success: false,
                message: 'Name is required',
            };
        }

        if (!formData.email?.trim()) {
            return {
                success: false,
                message: 'Email is required',
            };
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            return {
                success: false,
                message: 'Please enter a valid email address',
            };
        }

        if (!formData.message?.trim()) {
            return {
                success: false,
                message: 'Message is required',
            };
        }

        // Prepare form data for Google Apps Script
        const submitData = new URLSearchParams();
        submitData.append('name', formData.name.trim());
        submitData.append('email', formData.email.trim());
        submitData.append('message', formData.message.trim());
        submitData.append('timestamp', new Date().toISOString());

        // Submit to Google Apps Script
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: submitData.toString(),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse response
        const result = await response.text();
        let parsedResult;

        try {
            parsedResult = JSON.parse(result);
        } catch (parseError) {
            parsedResult = { status: 'success' };
        }

        if (parsedResult.result === 'success') {
            return {
                success: true,
                message:
                    "Message sent successfully! We'll get back to you soon.",
            };
        } else {
            throw new Error(parsedResult.message || 'Unknown error occurred');
        }
    } catch (error) {
        console.error('Contact form submission error:', error);

        return {
            success: false,
            message:
                error instanceof Error
                    ? `Failed to send message: ${error.message}`
                    : 'Failed to send message. Please try again or contact us directly.',
        };
    }
}

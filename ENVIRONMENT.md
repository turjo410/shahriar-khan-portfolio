# Environment Setup

## Required Environment Variables

This project doesn't require any environment variables for basic functionality. However, if you want to add features like contact forms or analytics, you can create a `.env.local` file in the root directory.

### Optional Environment Variables

```bash
# Example .env.local file

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form Service (Optional - e.g., FormSpree, EmailJS)
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id

# Add any other API keys here
```

## How to Use

1. Create a `.env.local` file in the project root
2. Add your environment variables
3. Access them in your code using `process.env.NEXT_PUBLIC_*`
4. **Important**: Never commit `.env.local` to version control

## Deployment Environment Variables

When deploying to Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables there
4. Redeploy your project

## Notes

- Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Other variables are only available server-side
- The `.env.local` file is already in `.gitignore`

For more information, see: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables

/**
 * Analytics configuration for VTF Crowdfunding Site
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-PLACEHOLDER'

export const isAnalyticsEnabled = (): boolean => {
  // Enable analytics in production and staging
  // Disable in development to avoid skewing data
  return process.env.NODE_ENV === 'production'
}

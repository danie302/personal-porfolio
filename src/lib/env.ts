const env = {
  fullName: process.env.NEXT_PUBLIC_FULL_NAME ?? "Your Name",
  jobTitle: process.env.NEXT_PUBLIC_JOB_TITLE ?? "Web Developer",
  tagline: process.env.NEXT_PUBLIC_TAGLINE ?? "Building modern web experiences",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  bio: process.env.NEXT_PUBLIC_BIO ?? "",
  cvPath: process.env.NEXT_PUBLIC_CV_PATH ?? "/cv.pdf",
  profileImage: process.env.NEXT_PUBLIC_PROFILE_IMAGE ?? "/images/profile.jpg",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
};

export default env;

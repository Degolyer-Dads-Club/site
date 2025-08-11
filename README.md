# DeGolyer Elementary Dads Club Website

A modern, responsive website for the DeGolyer Elementary Dads Club PTO built with Next.js, React, and Tailwind CSS.

## Features

- **About Us**: Information about the Dads Club and its mission
- **Contact Us**: Contact information and contact form
- **Gallery**: Photo gallery of events and activities
- **Calendar**: Downloadable calendar files for Google and iOS
- **Merchandise**: Online store for Dads Club merchandise
- **Auction**: Direct link to the online auction platform
- **Responsive Design**: Mobile-first design that works on all devices
- **Teal & White Color Scheme**: Branded with the official school colors

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd degolyer-dads-club
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
degolyer-dads-club/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout component
│       ├── page.tsx            # Main page component
│       └── globals.css         # Global styles
├── public/                     # Static assets
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # This file
```

## Customization

### Colors
The website uses a teal and white color scheme. You can customize the colors by modifying the Tailwind classes throughout the components.

### Content
- Update the content in `src/app/page.tsx` to reflect your specific information
- Replace placeholder images in the gallery section with actual photos
- Update contact information and school details
- Modify merchandise items and prices

### Calendar Integration
To add actual calendar functionality:
1. Create `.ics` files for calendar downloads
2. Implement calendar API integration
3. Add event management system

### Form Handling
The contact form is currently static. To make it functional:
1. Add form validation
2. Integrate with a form service (Formspree, Netlify Forms, etc.)
3. Add email functionality

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project can be deployed to any platform that supports static sites or Node.js applications.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact the DeGolyer Elementary Dads Club.

## School Information

- **School**: Everette L. DeGolyer Elementary School
- **Address**: 3453 Flair Dr, Dallas, TX 75229
- **Phone**: (972) 794-2800
- **Website**: [https://degolyer.dallasisd.org/](https://degolyer.dallasisd.org/)
- **Auction**: [https://event.auctria.com/f686fa91-5ca3-47c8-8ede-cd4b66145729](https://event.auctria.com/f686fa91-5ca3-47c8-8ede-cd4b66145729)

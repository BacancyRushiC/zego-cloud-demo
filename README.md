# Video Call Application

A modern, real-time video calling application built with React, TypeScript, and Zego Cloud. Features a beautiful UI with smooth animations and a seamless user experience.

## Features

- 🎥 Real-time video calling
- 🔗 Share call links with others
- 🎨 Modern UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 🌙 Dark theme
- 📱 Responsive design

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Zego Cloud SDK
- React Router

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Zego Cloud account and credentials

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd video-call-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Zego Cloud credentials:

```env
VITE_ZEGO_APP_ID=your_app_id
VITE_ZEGO_SERVER_SECRET=your_server_secret
```

4. Start the development server:

```bash
npm run dev
```

## Usage

1. Open the application in your browser
2. Click "Start New Call" to create a new video call
3. Share the generated link with others to join the call
4. Enjoy your video call!

## Development

### Project Structure

```
src/
├── components/     # React components
├── ui/            # UI components and animations
├── lib/           # Utility functions
└── assets/        # Static assets
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Rushi Chudasama](https://www.linkedin.com/in/rushi-chudasama-63473819a/)

## Acknowledgments

- [Zego Cloud](https://www.zegocloud.com/) for the video calling SDK
- [Tailwind CSS](https://tailwindcss.com/) for the styling
- [Framer Motion](https://www.framer.com/motion/) for the animations

# PH Tube - Video Streaming Platform

<p align="center">
  <img src="./assets/Logo.png" alt="PH Tube Logo" width="200">
</p>

## Overview

PH Tube is a responsive web-based video streaming application where users can browse and watch videos sorted by categories such as music, comedy, tutorials, and more. The application fetches video data from a REST API and presents it in an intuitive, user-friendly interface.

## Features

- **Category-based Video Browsing**: Filter videos by different categories
- **Sort by View Count**: Organize videos based on popularity
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Video Details**: View video information including title, author, and view count
- **Verified Creator Badges**: Easily identify verified content creators

## Technologies Used

- **HTML5**: Structure of the web application
- **CSS3**: Custom styling with variables for consistent theming
- **JavaScript**: Dynamic content loading and interaction handling
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **DaisyUI**: Component library for Tailwind CSS
- **Google Fonts**: Poppins font family for typography

## API Endpoints

### Get All Categories
```
GET: https://openapi.programming-hero.com/api/phero-tube/categories
```

### Get All Videos
```
GET: https://openapi.programming-hero.com/api/phero-tube/videos
```

### Get Videos by Category
```
GET: https://openapi.programming-hero.com/api/phero-tube/category/{categoryId}
Example: https://openapi.programming-hero.com/api/phero-tube/category/1001
```

### Search Videos by Title
```
GET: https://openapi.programming-hero.com/api/phero-tube/videos?title={videoTitle}
Example: https://openapi.programming-hero.com/api/phero-tube/videos?title=shape
```

### Get Video Details
```
GET: https://openapi.programming-hero.com/api/phero-tube/video/{video_id}
Example: https://openapi.programming-hero.com/api/phero-tube/video/aaac
```

## Project Structure

```
├── assets/              # Contains images and favicon
├── css/                 # CSS stylesheets
├── scripts/             # JavaScript files
├── index.html           # Main HTML file
└── tailwind.config.js   # Tailwind configuration
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ph-tube.git
   ```

2. Open the project folder:
   ```
   cd ph-tube
   ```

3. Open `index.html` in your browser or use a local server:
   ```
   # Using Python's built-in server
   python -m http.server
   ```

4. Access the application at `http://localhost:8000`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from various video streaming platforms
- API provided by Programming Hero

document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Monocular Depth Estimation",
            image: "git_images/mono depth.jpeg",
            video: "git_videos/mono.mp4",
            github: "https://github.com/akoushik2k/Mono-Depth-Estimation.git"
        },
        {
            title: "Visual Odometry",
            image: "git_images/zed-stereo-camera.jpg",
            video: "git_videos/Visual odometry.mp4",
            github: "https://github.com/akoushik2k/visual-odometry.git"
        },
        {
            title: "Object Tracking",
            image: "git_images/Tracked Object.png",
            video: "git_videos/object tracking.mp4",
            github: "https://github.com/akoushik2k/Object-Tracking.git"
        },
        {
            title: "Stereo Depth Estimation",
            image: "git_images/stereo.png",
            video: "git_images/stereo.png",
            github: "https://github.com/akoushik2k/stereo-and-depth-Map.git"
        },
        {
            title: "Swarm Control",
            image: "git_images/NCS.png",
            video: "git_videos/Final Video Robotarium.mp4",
            github: "https://github.com/akoushik2k/swarm_control-Network-Control-Systems.git"
        },
        {
            title: "LQR & LQG Design for a Crane with Weights",
            image: "git_images/lqrlqg.jpg",
            video: "git_images/lqrlqg.jpg",
            github: "https://github.com/akoushik2k/LQR-and-LQG-Controller-Implementation-on-a-Moving-Crane.git"
        },
        {
            title: "Adaptive Terminal Sliding Mode Control",
            image: "git_images/Adaptive.jpg",
            video: "git_images/lqrlqg.jpg",
            github: "https://github.com/akoushik2k/Adaptive-Terminal-Sliding.git"
        },
        {
            title: "Manufacuring Automation - ARIAC",
            image: "git_images/ariac.png",
            video: "git_videos/High Priority.mp4",
            github: "https://github.com/yourusername/project5"
        }
    ];

    const projectGrid = document.querySelector(".projects-grid");

    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-thumbnail">
            <video class="project-video" loop muted playsinline>
                <source src="${project.video}" type="video/mp4">
            </video>
            <div class="project-title">${project.title}</div>
        `;

        // Play video on hover
        projectItem.addEventListener("mouseenter", () => {
            const video = projectItem.querySelector(".project-video");
            video.play();
        });

        // Pause video when hover ends
        projectItem.addEventListener("mouseleave", () => {
            const video = projectItem.querySelector(".project-video");
            video.pause();
            video.currentTime = 0; // Reset video
        });

        // Click to open GitHub
        projectItem.addEventListener("click", () => {
            window.open(project.github, "_blank");
        });

        projectGrid.appendChild(projectItem);
    });
});

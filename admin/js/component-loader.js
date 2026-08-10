// ===========================================
// TRANZO Component Loader
// ===========================================

async function loadComponent(containerId, filePath) {

    const container = document.getElementById(containerId);

    if (!container) return;

    try {

        const response = await fetch(filePath);

        if (!response.ok) {

            throw new Error("Component not found.");

        }

        const html = await response.text();

        container.innerHTML = html;

    }

    catch (error) {

        console.error(error);

    }

}



// ===========================================
// Load Components
// ===========================================

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent(

        "sidebar-container",

        "components/sidebar.html"

    );



    await loadComponent(

        "topbar-container",

        "components/topbar.html"

    );

});

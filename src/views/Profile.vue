<template>
    <main class="profile-page bg-gradient-to-tr from-red-500 to-blue-500 flex flex-col md:flex-col items-center justify-around">
        <div class="flex flex-col md:flex-row items-center justify-center">
            <div class="text-center md:text-left md:mr-16 text-white max-w-2xl">
                <h1 class="text-4xl font-bold">LENG MENGE</h1>
                <h2 class="text-3xl font-bold text-green-500 mt-4">Mobile App Developer</h2>
                <p class="text-xl font-bold mt-6">3+ years of experience building production iOS and Flutter applications.</p>
                <p class="mt-6 text-lg">
                    "I specialize in Swift, UIKit, and Flutter, with a passion for clean UI, scalable code, and delivering smooth user experiences. 
                    Experienced in API integration, custom UI components, and performance optimization."
                </p>
            </div>
            <img class="w-full md:w-auto md:h-64 rounded-full mt-6 md:mt-0" src="../assets/profile-circle.jpg" alt="logo" style="object-fit: contain;">
        </div>
        <router-link class="button flex flex-col md:flex-col items-center justify-center text-green-500" to="/contact">
            <span class="material-icons text-4xl">email</span>
            <p>Contact me</p>
        </router-link>
        <i class="pi pi-check"></i>
    </main>
</template>

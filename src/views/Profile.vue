<template>
    <main class="profile-page bg-gradient-to-tr from-red-500 to-blue-500 flex flex-col md:flex-col items-center justify-around">
        <div class="flex flex-col md:flex-row items-center justify-center">
            <div class="text-center md:text-left md:mr-16 text-white">
                <h1 class="text-4xl font-bold">LENG MENGE</h1>
                <h2 class="text-3xl font-bold text-green-500 mt-4">Mobile Developer</h2>
                <p class="text-2xl font-bold mt-6">I have experience in flutter development hosting application to playstore and appstore</p>
                <p class="mt-6">"Mobile developers are like digital architects, building apps that bring ideas to life, making technology accessible to all."</p>
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

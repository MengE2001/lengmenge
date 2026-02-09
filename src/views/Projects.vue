<template>
    <main class="projects-page bg-gradient-to-tr from-emerald-500 to-teal-600 min-h-screen p-6 flex justify-center">
        <div class="max-w-6xl w-full">
            <h1 class="text-4xl font-bold text-white text-center mb-12">Selected Projects</h1>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Receipt Management App -->
                <div class="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl text-white flex flex-col hover:transform hover:scale-105 transition-all duration-300">
                    <div class="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-2xl">🧾</div>
                    <h2 class="text-2xl font-bold mb-2">Receipt Management App</h2>
                    <p class="text-emerald-200 text-sm mb-4 font-semibold">Production • iOS (Swift)</p>
                    
                    <ul class="list-disc list-inside space-y-2 text-sm text-white/90 flex-grow">
                        <li>iOS app for viewing, tracking, and exporting receipt data.</li>
                        <li>Built using Swift, UIKit, MVVM.</li>
                        <li>Implemented dynamic table views with expandable sections.</li>
                        <li>Added PDF export and share functionality.</li>
                        <li>Integrated REST APIs and handled large datasets.</li>
                    </ul>

                    <div class="mt-6 flex space-x-3">
                         <a href="#" class="flex-1 py-2 bg-white/20 rounded-lg text-center hover:bg-white/30 transition text-sm font-semibold">App Store</a>
                         <!-- <a href="#" class="flex-1 py-2 bg-white/20 rounded-lg text-center hover:bg-white/30 transition text-sm font-semibold">GitHub</a> -->
                    </div>
                </div>

                <!-- Special Rate Management App -->
                <div class="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl text-white flex flex-col hover:transform hover:scale-105 transition-all duration-300">
                    <div class="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-2xl">⚡</div>
                    <h2 class="text-2xl font-bold mb-2">Special Rate Helper</h2>
                    <p class="text-emerald-200 text-sm mb-4 font-semibold">Internal Tool • Flutter</p>
                    
                    <ul class="list-disc list-inside space-y-2 text-sm text-white/90 flex-grow">
                        <li>Flutter app for displaying rate data with effective and expiry dates.</li>
                        <li>Used Flutter, Clean Architecture.</li>
                        <li>Implemented collapsible headers and shimmer loading.</li>
                        <li>Optimized UI performance for large lists.</li>
                    </ul>

                    <div class="mt-6 flex space-x-3">
                         <a href="#" class="flex-1 py-2 bg-white/20 rounded-lg text-center hover:bg-white/30 transition text-sm font-semibold">View Details</a>
                    </div>
                </div>

                <!-- Meditation / Course App -->
                <div class="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl text-white flex flex-col hover:transform hover:scale-105 transition-all duration-300">
                    <div class="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-2xl">🧘</div>
                    <h2 class="text-2xl font-bold mb-2">Meditation App</h2>
                    <p class="text-emerald-200 text-sm mb-4 font-semibold">Concept • Flutter</p>
                    
                    <ul class="list-disc list-inside space-y-2 text-sm text-white/90 flex-grow">
                        <li>Mobile app featuring category filters and grid layouts.</li>
                        <li>Built with Flutter & UICollectionView-like layouts.</li>
                        <li>Focused on smooth animations and user experience.</li>
                    </ul>
                    
                     <div class="mt-6 flex space-x-3">
                         <a href="#" class="flex-1 py-2 bg-white/20 rounded-lg text-center hover:bg-white/30 transition text-sm font-semibold">GitHub</a>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

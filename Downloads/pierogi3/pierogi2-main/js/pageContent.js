/**
 * Page Content Configuration
 * Contains all page templates and content data
 */
const PageContent = {
    home: `
        <div id="home-content" class="pb-8">
            <!-- Hero Section -->
            <div class="relative h-96 md:h-[500px] mb-8 rounded-xl mx-4 overflow-hidden shadow-2xl" style="animation: fadeInUp 0.8s ease-out;">
                <!-- Logo Background with enhanced overlay -->
                <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('./assets/images/Pierogilogo.png');">
                    <!-- Enhanced gradient overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <!-- Subtle animated glow effect -->
                    <div class="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-orange-400/10 animate-pulse"></div>
                </div>
                
                <!-- Content positioned at bottom -->
                <div class="absolute bottom-0 left-0 right-0 p-6" style="animation: slideInUp 1s ease-out 0.3s both;">
                    <!-- Action Button with enhanced styling -->
                    <div class="flex justify-center">
                        <button class="bg-white text-[var(--primary-color)] px-8 py-4 rounded-xl font-bold btn-animated card-hover shadow-xl text-lg border-2 border-transparent hover:border-yellow-300 hover:shadow-2xl" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                            <span class="relative z-10">View Menu</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Featured Highlights -->
            <div class="px-4 mb-12" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <h2 class="text-4xl font-bold text-center gradient-text mb-12 relative">
                    Why Choose Pierogi House?
                    <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div class="bg-gradient-to-br from-white to-yellow-50 rounded-xl shadow-lg p-8 text-center card-hover border border-yellow-100" style="animation: slideInLeft 0.6s ease-out 0.4s both;">
                        <div class="text-5xl mb-6 float-animation animate-delay-1">👨‍🍳</div>
                        <h3 class="text-2xl font-bold gradient-text mb-4">Handmade Daily</h3>
                        <p class="text-gray-600 leading-relaxed">Every pierogi is carefully crafted by hand using traditional Polish techniques passed down through generations.</p>
                        <div class="mt-4 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto"></div>
                    </div>
                    <div class="bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg p-8 text-center card-hover border border-orange-100" style="animation: fadeInUp 0.6s ease-out 0.6s both;">
                        <div class="text-5xl mb-6 float-animation animate-delay-2">🥟</div>
                        <h3 class="text-2xl font-bold gradient-text mb-4">Authentic Recipes</h3>
                        <p class="text-gray-600 leading-relaxed">Original family recipes from Poland, featuring premium ingredients and time-honored cooking methods.</p>
                        <div class="mt-4 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto"></div>
                    </div>
                    <div class="bg-gradient-to-br from-white to-red-50 rounded-xl shadow-lg p-8 text-center card-hover border border-red-100" style="animation: slideInRight 0.6s ease-out 0.8s both;">
                        <div class="text-5xl mb-6 float-animation animate-delay-3">⚡</div>
                        <h3 class="text-2xl font-bold gradient-text mb-4">Fresh & Hot</h3>
                        <p class="text-gray-600 leading-relaxed">Hot, delicious pierogis served fresh from our kitchen, guaranteed warm and flavorful every time.</p>
                        <div class="mt-4 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mx-auto"></div>
                    </div>
                </div>
            </div>

            <!-- Featured Menu Items -->
            <div class="px-4 mb-12" style="animation: fadeInUp 0.8s ease-out 0.4s both;">
                <h2 class="text-4xl font-bold text-center gradient-text mb-12 relative">
                    Customer Favorites
                    <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100 group" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                        <div class="h-48 overflow-hidden relative">
                            <img src="./assets/images/Classicpotatoandcheese.jpg" alt="Classic Potato & Cheese" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold gradient-text mb-2">Classic Potato & Cheese</h3>
                            <p class="text-gray-600 mb-4 leading-relaxed">Traditional pierogis filled with creamy mashed potatoes and farmer's cheese.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-[var(--primary-color)] flex items-center">
                                    <span class="text-sm text-gray-500 mr-1">$</span>19.99
                                </span>
                                <button class="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-xl font-semibold btn-animated hover:shadow-lg transition-all duration-300 transform hover:scale-105" onclick="window.PierogiApp.getCartManager().addToCart('classic-potato-cheese', 'Classic Potato & Cheese', 19.99)">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100 group" style="animation: fadeInUp 0.6s ease-out 0.8s both;">
                        <div class="h-48 overflow-hidden relative">
                            <img src="./assets/images/stuffedpeppers.jpg" alt="Stuffed Peppers" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold gradient-text mb-2">Stuffed Peppers</h3>
                            <p class="text-gray-600 mb-4 leading-relaxed">Bell peppers stuffed with seasoned rice and meat filling.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-[var(--primary-color)] flex items-center">
                                    <span class="text-sm text-gray-500 mr-1">$</span>15.99
                                </span>
                                <button class="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-xl font-semibold btn-animated hover:shadow-lg transition-all duration-300 transform hover:scale-105" onclick="window.PierogiApp.getCartManager().addToCart('stuffed-peppers', 'Stuffed Peppers', 15.99)">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100 group" style="animation: slideInRight 0.6s ease-out 1s both;">
                        <div class="h-48 overflow-hidden relative">
                            <img src="./assets/images/bostonbutt.jpg" alt="Boston Butt" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold gradient-text mb-2">Boston Butt</h3>
                            <p class="text-gray-600 mb-4 leading-relaxed">Tender pulled pork filling in handmade pierogi dough.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-[var(--primary-color)] flex items-center">
                                    <span class="text-sm text-gray-500 mr-1">$</span>19.99
                                </span>
                                <button class="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-xl font-semibold btn-animated hover:shadow-lg transition-all duration-300 transform hover:scale-105" onclick="window.PierogiApp.getCartManager().addToCart('boston-butt', 'Boston Butt', 19.99)">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Customer Testimonials -->
            <div class="px-4 mb-12" style="animation: fadeInUp 0.8s ease-out 0.6s both;">
                <h2 class="text-4xl font-bold text-center gradient-text mb-12 relative">
                    What Our Customers Say
                    <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div class="bg-gradient-to-br from-white to-yellow-50 rounded-xl shadow-lg p-8 card-hover border border-yellow-100 relative" style="animation: slideInLeft 0.6s ease-out 0.8s both;">
                        <div class="absolute top-4 right-4 text-6xl text-yellow-200 opacity-30">"</div>
                        <div class="flex items-center mb-6">
                            <div class="text-yellow-400 text-2xl animate-pulse">★★★★★</div>
                        </div>
                        <p class="text-gray-700 mb-6 italic leading-relaxed relative z-10">"The best pierogis I've ever had! Reminds me of my grandmother's cooking. The potato and cheese ones are absolutely perfect."</p>
                        <div class="font-bold gradient-text text-lg">- Maria K.</div>
                    </div>
                    <div class="bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg p-8 card-hover border border-orange-100 relative" style="animation: fadeInUp 0.6s ease-out 1s both;">
                        <div class="absolute top-4 right-4 text-6xl text-orange-200 opacity-30">"</div>
                        <div class="flex items-center mb-6">
                            <div class="text-yellow-400 text-2xl animate-pulse">★★★★★</div>
                        </div>
                        <p class="text-gray-700 mb-6 italic leading-relaxed relative z-10">"Amazing food and great atmosphere! The meat pierogis are incredibly flavorful. This is now our go-to for family dinners."</p>
                        <div class="font-bold gradient-text text-lg">- John D.</div>
                    </div>
                    <div class="bg-gradient-to-br from-white to-red-50 rounded-xl shadow-lg p-8 card-hover border border-red-100 relative" style="animation: slideInRight 0.6s ease-out 1.2s both;">
                        <div class="absolute top-4 right-4 text-6xl text-red-200 opacity-30">"</div>
                        <div class="flex items-center mb-6">
                            <div class="text-yellow-400 text-2xl animate-pulse">★★★★★</div>
                        </div>
                        <p class="text-gray-700 mb-6 italic leading-relaxed relative z-10">"Authentic Polish flavors that transport you straight to Poland. The sauerkraut and mushroom variety is my favorite!"</p>
                        <div class="font-bold gradient-text text-lg">- Anna S.</div>
                    </div>
                </div>
            </div>

            <!-- Contact CTA -->
            <div class="px-4 mb-8" style="animation: fadeInUp 0.8s ease-out 0.8s both;">
                <div class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
                    <!-- Animated background pattern -->
                    <div class="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-orange-400/10 animate-pulse"></div>
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                    
                    <div class="relative z-10">
                        <h2 class="text-4xl font-bold mb-6 gradient-text">Ready to Order? 🍽️</h2>
                        <p class="text-xl mb-8 text-gray-300 leading-relaxed">Experience authentic Polish flavors in our cozy restaurant</p>
                        <div class="flex flex-col sm:flex-row gap-6 justify-center">
                            <button class="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-10 py-4 rounded-xl font-bold btn-animated hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg" onclick="window.location.hash='menu'">
                                Browse Menu
                            </button>
                            <button class="bg-transparent border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg" onclick="window.location.hash='contact'">
                                Call (555) 123-PIEROGI
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    // Menu page content is handled dynamically by PageManager

    order: `
        <div id="order-content">
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-2">My Order</h1>
                <p class="text-[var(--text-medium)]">Review your items</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Cart Items</h2>
                <div id="cart-items-list"></div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-xl font-bold text-[var(--text-dark)]">Total:</span>
                    <span id="cart-total" class="text-xl font-bold text-[var(--primary-color)]">$0.00</span>
                </div>
                <button class="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    `,

    about: `
        <div id="about-content" class="pb-8">
            <!-- Hero Banner -->
            <div class="relative bg-gradient-to-br from-[var(--primary-color)] to-red-700 text-white py-12 px-6 mb-8 rounded-xl mx-4 overflow-hidden">
                <div class="absolute inset-0 bg-black/10"></div>
                <div class="relative text-center max-w-4xl mx-auto">
                    <!-- Removed home emoji -->
                    <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                        About Pierogi House
                    </h1>
                    <p class="text-xl md:text-2xl mb-4 opacity-90">Fresh Start, Timeless Tradition</p>
                    <div class="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg inline-block">
                        <p class="font-bold">Proudly Serving Myrtle Beach Since 2025</p>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="max-w-4xl mx-auto px-4">
                <!-- Our Story Section -->
                <div class="mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[var(--primary-color)]">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-[var(--primary-color)] mr-4"></div>
                            <h2 class="text-2xl font-bold text-[var(--text-dark)]">Our Story</h2>
                        </div>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg mb-4">
                            Pierogi House opened its doors in 2025 with a simple dream: to bring the authentic flavors of Poland to the beautiful coastal community of Myrtle Beach. Our restaurant was founded with a passion for sharing traditional Polish cuisine and creating a welcoming space for families and food lovers alike.
                        </p>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg">
                            We chose Myrtle Beach as our home because of the area's warm hospitality and vibrant food scene. Our kitchen features treasured traditional recipes that have been perfected over generations, bringing time-honored Polish culinary traditions to our coastal community.
                        </p>
                    </div>
                </div>

                <!-- Why Myrtle Beach Section -->
                <div class="mb-12">
                    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-blue-500 mr-4"></div>
                            <h2 class="text-2xl font-bold text-[var(--text-dark)]">Why Myrtle Beach?</h2>
                        </div>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg mb-4">
                            Myrtle Beach's welcoming spirit and diverse community creates the perfect atmosphere for authentic Polish cuisine. The coastal city's appreciation for comfort food and family dining makes it an ideal location for sharing traditional Polish flavors.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-blue-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Coastal Comfort</h3>
                                <p class="text-[var(--text-medium)] text-sm">Perfect pairing of hearty Polish food with beachside relaxation</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm">
                                <div class="w-8 h-1 bg-green-400 mb-3 mx-auto"></div>
                                <h3 class="font-bold text-[var(--text-dark)] mb-2">Family Values</h3>
                                <p class="text-[var(--text-medium)] text-sm">A community that celebrates family traditions and home cooking</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Our Mission & Values -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4 text-center">Our Mission</h2>
                        <p class="text-[var(--text-medium)] leading-relaxed">
                            To create a welcoming space where traditional Polish flavors meet Southern hospitality, bringing families and friends together over handcrafted comfort food that nourishes both body and soul.
                        </p>
                    </div>
                    
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4 text-center">Our Values</h2>
                        <ul class="text-[var(--text-medium)] space-y-2">
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Authentic family recipes</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Fresh, local ingredients</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Handmade with love</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Community focused</li>
                        </ul>
                    </div>
                </div>

                <!-- Our Commitment -->
                <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl shadow-lg p-8 mb-12">
                    <div class="text-center mb-6">
                        <div class="w-16 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-2">Our Commitment</h2>
                        <p class="text-[var(--primary-color)] font-semibold">"From Our Kitchen to Your Table"</p>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-sm">
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg text-center">
                            Every pierogi that leaves our kitchen is made with care and attention using traditional techniques. We use only premium ingredients and time-honored recipes to ensure each dish delivers authentic Polish flavors. When you dine with us, you're experiencing the rich culinary heritage of Poland in every bite.
                        </p>
                    </div>
                </div>

                <!-- Fun Facts -->
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-6 text-center">Fun Facts About Us</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="text-center p-4 bg-gradient-to-b from-yellow-50 to-orange-50 rounded-lg">
                            <div class="text-3xl mb-2 text-[var(--primary-color)] font-bold">•</div>
                            <div class="text-2xl font-bold text-[var(--primary-color)] mb-1">500+</div>
                            <p class="text-[var(--text-medium)] text-sm">Pierogis made fresh daily</p>
                        </div>
                        <div class="text-center p-4 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-lg">
                            <div class="text-3xl mb-2 text-blue-500 font-bold">•</div>
                            <div class="text-2xl font-bold text-[var(--primary-color)] mb-1">12</div>
                            <p class="text-[var(--text-medium)] text-sm">Traditional family recipes</p>
                        </div>
                        <div class="text-center p-4 bg-gradient-to-b from-green-50 to-emerald-50 rounded-lg">
                            <div class="text-3xl mb-2 text-green-500 font-bold">•</div>
                            <div class="text-2xl font-bold text-[var(--primary-color)] mb-1">100%</div>
                            <p class="text-[var(--text-medium)] text-sm">Handmade from scratch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    contact: `
        <div id="contact-content" class="max-w-2xl mx-auto">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-4">Contact Us</h1>
                <p class="text-lg text-[var(--text-medium)]">We'd love to hear from you!</p>
            </div>
            
            <div class="space-y-6">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Get in Touch</h2>
                    <div class="space-y-3">
                        <div class="flex items-center space-x-3">
                            <span class="text-[var(--primary-color)] font-semibold">Phone:</span>
                            <span class="text-[var(--text-medium)]">(555) 123-PIEROGI</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="text-[var(--primary-color)] font-semibold">Email:</span>
                            <span class="text-[var(--text-medium)]">info@pierogihouse.com</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="text-[var(--primary-color)] font-semibold">Address:</span>
                            <span class="text-[var(--text-medium)]">123 Polish Street, Foodie City, FC 12345</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Hours</h2>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Monday - Thursday:</span>
                            <span class="text-[var(--text-dark)] font-medium">11:00 AM - 9:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Friday - Saturday:</span>
                            <span class="text-[var(--text-dark)] font-medium">11:00 AM - 10:00 PM</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Sunday:</span>
                            <span class="text-[var(--text-dark)] font-medium">12:00 PM - 8:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

};

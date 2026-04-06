const products = [
    { id: 1, name: 'Inverter Split AC 1.5 Ton 5 Star', category: 'Split ACs', price: 45000, rating: 5, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Split+AC+1.5T' },
    { id: 2, name: 'Inverter Split AC 1 Ton 3 Star', category: 'Split ACs', price: 32000, rating: 3, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Split+AC+1T' },
    { id: 3, name: 'Window AC 1.5 Ton 5 Star', category: 'Window ACs', price: 35000, rating: 5, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Window+AC+1.5T' },
    { id: 4, name: 'Window AC 1.2 Ton 4 Star', category: 'Window ACs', price: 29000, rating: 4, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Window+AC+1.2T' },
    { id: 5, name: 'Portable AC 1 Ton', category: 'Portable ACs', price: 28000, rating: 4, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Portable+AC' },
    { id: 6, name: 'HEPA Air Purifier BS-AP90', category: 'Air Purifiers', price: 12000, rating: 5, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Air+Purifier' },
    { id: 7, name: 'Room Air Purifier 300sqft', category: 'Air Purifiers', price: 8500, rating: 3, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Air+Purifier+Lite' },
    { id: 8, name: 'Tower Air Cooler 50L', category: 'Air Coolers', price: 9000, rating: 4, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Air+Cooler' },
    { id: 9, name: 'Desert Air Cooler 80L', category: 'Air Coolers', price: 12500, rating: 5, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Desert+Cooler' },
    { id: 10, name: 'RO+UV Water Purifier 7L', category: 'Water Purifiers', price: 14000, rating: 5, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Water+Purifier' },
    { id: 11, name: 'Double Door Refrigerator 250L', category: 'Refrigerators', price: 24000, rating: 4, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Refrigerator' },
    { id: 12, name: 'Single Door Refrigerator 190L', category: 'Refrigerators', price: 15000, rating: 3, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Mini+Fridge' },
    { id: 13, name: 'Premium Split AC 2 Ton 5 Star', category: 'Split ACs', price: 55000, rating: 5, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Split+AC+2.0T' },
    { id: 14, name: 'Basic Window AC 1 Ton 2 Star', category: 'Window ACs', price: 22000, rating: 2, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Window+AC+1.0T' },
    { id: 15, name: 'Commercial Portable AC', category: 'Portable ACs', price: 42000, rating: 5, image: 'https://placehold.co/400x300/e2e8f0/475569?text=Comm+Portable+AC' },
];

function generateStars(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += `<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
        } else {
            starsHtml += `<svg class="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
        }
    }
    return starsHtml;
}

function renderProducts(filteredProducts) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-10">No products found matching your filters.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col group cursor-pointer";
        
        card.innerHTML = `
            <div class="relative overflow-hidden bg-gray-50 pt-[75%]">
                <img src="${product.image}" alt="${product.name}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <span class="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wider">${product.category}</span>
                <h3 class="text-gray-900 font-bold text-lg mb-2 line-clamp-2">${product.name}</h3>
                <div class="flex items-center space-x-1 mb-4">
                    ${generateStars(product.rating)}
                </div>
                <div class="mt-auto">
                    <span class="text-2xl font-bold text-gray-900">₹${product.price.toLocaleString('en-IN')}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function initFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const ratingFilter = document.getElementById('rating-filter');

    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const selectedRating = ratingFilter.value;

        let filtered = products;

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        if (selectedRating !== 'All') {
            filtered = filtered.filter(p => p.rating === parseInt(selectedRating));
        }

        renderProducts(filtered);
    }

    categoryFilter.addEventListener('change', filterProducts);
    ratingFilter.addEventListener('change', filterProducts);
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the catalogue page by looking for the grid element
    if(document.getElementById('product-grid')){
        renderProducts(products);
        initFilters();
    }
});

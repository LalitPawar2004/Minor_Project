function selectProduct(name, description, price) {
    let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    selectedProducts.push({ name, description, price });
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    updateCartCount();
    alert(`${description} added to your Cart!`);
}

function updateCartCount() {
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    document.getElementById('item-count').textContent = selectedProducts.length;
}

// Initialize cart count
updateCartCount();
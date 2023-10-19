const liItems = document.querySelectorAll('ul li');
const imgItems = document.querySelectorAll('.um a');

liItems.forEach(li => {
    li.addEventListener('click', function() {
        liItems.forEach(item => {
            item.classList.remove('active');
        });

        li.classList.add('active'); // Add an "active" class to the clicked list item

        const value = li.textContent.toLowerCase(); // Get the text content in lowercase
        imgItems.forEach(img => {
            img.style.display = 'none';
            const filterValue = img.getAttribute('class');

            if (filterValue === value || value === "all") {
                img.style.display = 'block';
            }
        });
    });
});

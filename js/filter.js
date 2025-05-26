$('.category-btn').click(function() {
            var cat = $(this).data('category');
            $('.category-btn').removeClass('active');
            $(this).addClass('active');
            if (cat === 'all') {
                $('.news-item').fadeIn();
            } else {
                $('.news-item').hide();
                $('.news-item[data-category="' + cat + '"]').fadeIn();
            }
        });

        // Scroll to top button
        function topFunction() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
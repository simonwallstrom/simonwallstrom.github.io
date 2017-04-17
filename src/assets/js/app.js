//
// APP
//


(function(){

    var portfolioSection = document.querySelector('.site-main');
    var portfolioLink = document.querySelector('.portfolio-link');

    portfolioLink.addEventListener('click', scrollToPortfolio);

    function scrollToPortfolio(e) {
        e.preventDefault();
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }

})();

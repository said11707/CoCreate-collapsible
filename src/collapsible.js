    document.addEventListener("click", function(e) {
      let parent;


      if (e.target.parentElement.classList.contains('collapsible'))
        parent = e.target.parentElement.parentElement.parentElement;


      let children = parent.querySelectorAll('.parent > .vdom-item');

      let arrow = parent.querySelector('.parent > .metadata > span > i');

      if (arrow.classList.contains('fa-caret-right')) {

        arrow.classList.add('fa-caret-down');
        arrow.classList.remove('fa-caret-right');
      }
      else {
        arrow.classList.add('fa-caret-right');
        arrow.classList.remove('fa-caret-down');

      }


      children.forEach(el => {
        el.classList.toggle('hidden');
        /* attemp to make anime work
         el.classList.toggle('hidden');
         if (!el.classList.contains('hidden')) {
           el.style.height = window.getComputedStyle(el).height;
           // el.classList.toggle('hidden');
         }
         else {

           el.style.height = ''
         }
         */

      })

    });
    
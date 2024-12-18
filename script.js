const faq = document.querySelectorAll(".faq");
const faq_answer = document.querySelectorAll(".faq_answer");
const buttons = document.querySelectorAll("span");

faq.forEach((item) => {

    const faq_question = item.children[0];
    const question = faq_question.children[0];
    const button = faq_question.children[1];
    const answer = item.children[1];

    function event() {
        faq_answer.forEach((ans) => {
            if (ans != answer && ans.classList.contains("active")) {
                ans.classList.remove('active');
            }
        })

        buttons.forEach((but) => {
            if (but != button && !but.children[0].classList.contains("active") && but.children[1].classList.contains("active")) {
                but.children[0].classList.add("active");
                but.children[1].classList.remove("active");
            }
        });

        button.children[0].classList.toggle("active");
        button.children[1].classList.toggle("active");
        answer.classList.toggle("active");
    }

    question.children[0].addEventListener("click", event);
    button.addEventListener("click", event);

})

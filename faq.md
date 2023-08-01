---
layout: page
title: FAQ
permalink: /faq/
---

{% for faq in site.data.faqs %}
  <button class="faq-question" onclick="document.getElementById('answer{{ forloop.index }}').classList.toggle('hidden')">
    {{ faq.question }}
  </button>
  <div id="answer{{ forloop.index }}" class="faq-answer hidden">
      {{ faq.answer | markdownify }}
  </div>
{% endfor %}

<style>
  .faq-answer.hidden {
    display: none;
  }
</style>

<script>
  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.target.nextElementSibling.classList.toggle('hidden');
    });
  });
</script>

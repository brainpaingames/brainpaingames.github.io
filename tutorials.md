---
layout: page
title: Tutorials
---

{% for post in site.categories.tutorial reversed %}
<div>
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.date | date: "%B %d, %Y" }}</p>
  <p>{{ post.excerpt }}</p>
</div>
{% endfor %}

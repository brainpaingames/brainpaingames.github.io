---
# This file is at `./index.md`

layout: page
title: Blog
permalink: /blog/
---

# Blog

Here are the latest posts from our blog:

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span>{{ post.date | date: "%B %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
---
# This file is at `./index.md`

layout: page
title: Blog
permalink: /blog/
---



<div class="blog-index">


  <ul class="post-list">
    {% for post in site.posts %}
      <li class="post-item">
        <h2 class="post-title">
          <a href="{{ post.url }}">{{ post.title }}</a>
        </h2>
        <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
        <div class="post-excerpt">
          {{ post.excerpt }}
        </div>
        <a class="read-more" href="{{ post.url }}">Read more</a>
      </li>
    {% endfor %}
  </ul>
</div>
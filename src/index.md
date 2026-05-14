---
layout: layout.njk
title: Tyler Coville
---

Engineering leader writing about engineering leadership and platform thinking. More on the [about page](/about/).

<ul class="post-list">
{%- for post in collections.posts | reverse %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <span class="post-list-date">{{ post.date | postDate }}</span>
  </li>
{%- else %}
  <li class="post-list-empty">No posts yet.</li>
{%- endfor %}
</ul>

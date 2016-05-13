
---
layout: default
permalink: /about/
---

<div class="header-bar">
  <h1>*folio</h1>
  <h2>simple whitespace theme</h2>
  <br/>
  <hr>
  <br/>
</div>


<ul class="post-list">
    {% for post in paginator.posts %}
      <li>
        <h2><a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
        <p class="post-meta">{{ post.date | date: '%B %-d, %Y — %H:%M' }}</p>
        <p>{{ post.description }}</p>
        <br/>
        <hr/>
      </li>
    {% endfor %}
</ul>

<img class="col one right" src="/img/prof_pic.jpg">

<br/>

Hi!

<br/>

Write your biography here. Tell the world about yourself. Link to your favorite <a href="http://reddit.com" target="blank">subreddit</a>. You can put a picture in, too. The code is already in, just name your picture "prof_pic.jpg" and put it in the img folder. 

<br/> 

Link to your social media connections, too. This theme is set up to use <a href="http://fortawesome.github.io/Font-Awesome/" target="blank">Font Awesome icons</a>, like the ones below. Add your facebook, twitter, linkedin, or just disable all of them. 


<br/>
<hr/>
<br/>
<span class="contacticon center">
  <a href="mailto:you@example.com"><i class="fa fa-envelope-square"></i></a>
  <a href="https://github.com" target="_blank"><i class="fa fa-github-square"></i></a>
  <a href="https://www.linkedin.com" target="_blank"><i class="fa fa-linkedin-square"></i></a>
  <a href="http://tumblr.com" target="_blank"><i class="fa fa-tumblr-square"></i></a>
  <a href="https://twitter.com" target="_blank"><i class="fa fa-twitter-square"></i></a>
</span>

<div class="col three caption">
  You can even add a little note about which of these is the best way to reach you.
</div>
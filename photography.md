---
layout: page
title: Here and there...
permalink: /photography/
images:
 - image_path: /showcase/IMG_0225.jpg
 - image_path: /showcase/IMG_0363.jpg
 - image_path: /showcase/IMG_0686.jpg
 - image_path: /showcase/IMG_4865.jpg
 - image_path: /showcase/IMG_0996.jpg
 - image_path: /showcase/IMG_1163.jpg
 - image_path: /showcase/IMG_9259.jpg
 - image_path: /showcase/IMG_2662.jpg
 - image_path: /showcase/IMG_2068.jpg
 - image_path: /showcase/IMG_4857.jpg
 - image_path: /showcase/IMG_2128.jpg
 - image_path: /showcase/IMG_2190.jpg
 - image_path: /showcase/IMG_2624.jpg
 - image_path: /showcase/IMG_2658.jpg
 - image_path: /showcase/IMG_3091.jpg
 - image_path: /showcase/IMG_3502.jpg
 - image_path: /showcase/IMG_0510.jpg
 - image_path: /showcase/IMG_3574.jpg
 - image_path: /showcase/IMG_3678.jpg
 - image_path: /showcase/IMG_4507.jpg
 - image_path: /showcase/IMG_4805.jpg
 - image_path: /showcase/IMG_4868.jpg
 - image_path: /showcase/IMG_3488.jpg
 - image_path: /showcase/IMG_5441.jpg
 - image_path: /showcase/IMG_5461.jpg
 - image_path: /showcase/IMG_0546.jpg
 - image_path: /showcase/IMG_5662.jpg
 - image_path: /showcase/IMG_5817.jpg
 - image_path: /showcase/IMG_6018.jpg
 - image_path: /showcase/IMG_0584.jpg
 - image_path: /showcase/IMG_6102.jpg
 - image_path: /showcase/IMG_9089.jpg
 - image_path: /showcase/IMG_9223.jpg
 - image_path: /showcase/IMG_6170.jpg
 - image_path: /showcase/IMG_6204.jpg
 - image_path: /showcase/IMG_0793.jpg
 - image_path: /showcase/IMG_6253.jpg
 - image_path: /showcase/IMG_6384.jpg
 - image_path: /showcase/IMG_6444.jpg
 - image_path: /showcase/IMG_6459.jpg
 - image_path: /showcase/IMG_6924.jpg
 - image_path: /showcase/IMG_7000.jpg
 - image_path: /showcase/IMG_8710.jpg
 - image_path: /showcase/IMG_7252.jpg
 - image_path: /showcase/IMG_7273.jpg
 - image_path: /showcase/IMG_7276.jpg
 - image_path: /showcase/IMG_0812.jpg
 - image_path: /showcase/IMG_7333.jpg
 - image_path: /showcase/IMG_3401.jpg
 - image_path: /showcase/IMG_7495.jpg
 - image_path: /showcase/IMG_8994.jpg
 - image_path: /showcase/IMG_9226.jpg
 - image_path: /showcase/IMG_7505.jpg
 - image_path: /showcase/IMG_7657.jpg
 - image_path: /showcase/IMG_7914.jpg
 - image_path: /showcase/IMG_7991.jpg
 - image_path: /showcase/IMG_8048.jpg
 - image_path: /showcase/IMG_8562.jpg
 - image_path: /showcase/IMG_9305.jpg
 - image_path: /showcase/IMG_9366.jpg
---
<head>
  <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="/lightGallery-Master/dist/css/lightgallery.css" /> 
            <style type="text/css">
            .demo-gallery > ul {
              list-style-type: none;
              margin-left: 0;              
              margin-bottom: 0;
            }
            .demo-gallery > ul > li a {
              border-radius: 3px;
              display: block;
              overflow: hidden;
              position: relative;
              float: left;
            }
            .demo-gallery > ul > a > li img {
              -webkit-transition: -webkit-transform 0.15s ease 0s;
              -moz-transition: -moz-transform 0.15s ease 0s;
              -o-transition: -o-transform 0.15s ease 0s;
              transition: transform 0.15s ease 0s;
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
              opacity: 0.9
            }
            .demo-gallery > ul > a:hover > li img {
              -webkit-transform: scale3d(1.05, 1.05, 1.05);
              transform: scale3d(1.05, 1.05, 1.05);
              opacity: 1.0
            }
        </style>
</head>


<body class="home">
      <!-- jQuery version must be >= 1.8.0; -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- A jQuery plugin that adds cross-browser mouse wheel support. (Optional) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
    <script src="/lightGallery-Master/dist/js/lightgallery-all.min.js"></script>
    <!-- lightgallery plugins -->
    <script src="/lightGallery-Master/modules/lg-thumbnail.min.js"></script>
    <script src="/lightGallery-Master/modules/lg-fullscreen.min.js"></script>
    <script src="/lg-hash-master/dist/lg-hash.min.js"></script>
<div class="demo-gallery">
  <ul id="lightgallery">
    {% for image in page.images %}
  <a href="{{ image.image_path }}" >
     <li><img class="col one" style=" width: 33.3%;height: 300px;overflow: hidden;" src="{{ image.image_path }}" alt="{{ image.title}}"/></li>
  </a>
    {% endfor %}
  </ul>
</div>

<script type="text/javascript">
    $(document).ready(function() {
        $("#lightgallery").lightGallery({
    mode: 'lg-fade',
    cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)'
});
    });
</script>
 </body>

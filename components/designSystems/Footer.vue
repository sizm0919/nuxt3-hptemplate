<template>
  <footer class="footer">
    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-1/2">
        <NuxtLink to="/">
          <div class="text-center">
            <img 
              src="https://placehold.jp/3697c7/ffffff/360x180.png?text=dummy"
              width="140"
              height="20" 
              alt="Company Logo"
              class="inline-block" 
            >
          </div>
        </NuxtLink>
        <address class="footer__address">
          <ul>
            <li>株式会社Company</li>
            <li>〒163-8001 東京都新宿区西新宿２丁目８−１</li>
            <li>TEL:<a href="tel:">0120-123-456</a></li>
          </ul>
        </address>
      </div>
      <div class="lg:w-1/2 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <p class="footer__nav-heading">
            About
          </p>
          <ul class="footer__nav-list">
            <li>Main About</li>
            <li>Sub About</li>
            <li>Other About</li>
          </ul>
        </div>
        <div>
          <p class="footer__nav-heading">
            Service
          </p>
          <ul class="footer__nav-list">
            <li>Main Service</li>
            <li>Sub Service</li>
            <li>Other Service</li>
          </ul>
        </div>
        <div>
          <p class="footer__nav-heading">
            News
          </p>
          <ul class="footer__nav-list">
            <li>Main News</li>
            <li>Sub News</li>
            <li>Other News</li>
          </ul>
        </div>
        <div>
          <p class="footer__nav-heading">
            Contact
          </p>
          <ul class="footer__nav-list">
            <li>Main Contact</li>
            <li>Sub Contact</li>
            <li>Other Contact</li>
          </ul>
        </div>
      </div>
    </div>
    <hr>
    <p class="footer__copyright">
      © 2023 Company Inc. All Rights Reserved.
    </p>
  </footer>
</template>

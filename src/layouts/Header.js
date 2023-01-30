import React from 'react'

const Header = () => {
  return (
    <div>
        <header class="site-header reveal-from-bottom is-revealed">
        <div class="container">
        <div class="site-header-inner">
        <div class="brand"><h1 class="m-0">
        <a href="/"><img src="/static/media/logo.2810a88b.svg" width="32" height="32" alt="Open" />
        </a>
        </h1>
        </div><button class="header-nav-toggle"><span class="screen-reader">Menu</span><span class="hamburger"><span class="hamburger-inner"></span></span></button><nav class="header-nav"><div class="header-nav-inner"><ul class="list-reset text-xs header-nav-right"><li><a href="/#0">Documentation</a></li></ul><ul class="list-reset header-nav-right"><li><a class="button button-primary button-wide-mobile button-sm" href="/#0">Sign up</a></li></ul></div></nav></div></div></header>
    </div>
  )
}

export default Header
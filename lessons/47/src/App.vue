<template>
   <section class="banner" role="banner">
      <site-header/>
      <div class="container">
         <div class="col-md-10 col-md-offset-1">
            <div class="banner-text text-center">
               <h1>Your Favorite One Page Multi Purpose Template</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna vel scelerisque
                  nisl
                  consectetur et.</p>
               <a href="#" class="btn btn-large">Find out more</a>
            </div>
         </div>
      </div>
   </section>
   <router-view />
   <site-footer/>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
export default {
   components: {
      SiteHeader,
      SiteFooter
   }
}
</script>
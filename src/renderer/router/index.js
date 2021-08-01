import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('@/components/Home').default,
      children: [
        {
          path: 'discover-music',
          name: 'discover-music',
          component: require('@/components/DiscoverMusic').default,
          children: [
            {
              path: 'personality-recommendations',
              name: 'personality-recommendations',
              component: require('@/components/PersonalityRecommendations').default,
            }
          ]
        },
        {
          path: 'songList-details',
          name: 'songList-details',
          component: require('@/components/SongListDetails').default,
          props: true,
          children: [
            {
              path: 'song-list',
              name: 'song-list',
              component: require('@/components/SongList').default,
              props: true,
            },
            {
              path: 'playlist-comment',
              name: 'playlist-comment',
              component: require('@/components/PlaylistComment').default,
              props: true,
            }
          ]
        }

      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

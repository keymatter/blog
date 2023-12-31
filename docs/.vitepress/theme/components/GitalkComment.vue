<script lang="ts" setup>
import md5 from 'md5'
import { inBrowser, useData } from 'vitepress'
import { onMounted, ref } from 'vue'


const { page, title } = useData()

const commentRef = ref<HTMLHtmlElement | null>(null)
const isGitee = ref(false)

onMounted(() => {
  isGitee.value = inBrowser && location.host.includes('gitee')
})

const handleLoad = () => {
  if (commentRef.value && inBrowser) {
    new (window as any).Gitalk({
      clientID: 'd043e806d74ff3ecfa64',
      clientSecret: '66f2fa78f067e27de59b28156a4be87c79e1eb94',
      repo: 'vite-press',
      owner: 'peiyanlu',
      admin: [ 'peiyanlu' ],
      id: md5(page.value.relativePath),
      language: 'zh-CN',
      distractionFreeMode: false,
    }).render(commentRef.value)
  }
}
</script>

<template>
  <div v-if="!isGitee" class="gitalk-comment">
    <div ref="commentRef" />
    <teleport to="head">
      <component
        is="link"
        :key="title"
        href="https://cdn.jsdelivr.net/npm/gitalk@latest/dist/gitalk.css"
        rel="stylesheet"
      />
    </teleport>
    <component
      is="script"
      :key="title"
      async
      src="https://cdn.jsdelivr.net/npm/gitalk@latest"
      @load="handleLoad"
    />
  </div>
  >
</template>

<style lang="scss">
.gitalk-comment {
  .gt-container {
    a {
      color: var(--vp-c-brand);
    }
    
    .gt-btn {
      border: 1px solid var(--vp-c-brand);
      background-color: var(--vp-c-brand);
    }
    
    .gt-meta {
      border-color: var(--vp-c-gutter);
      
      .gt-counts,
      .gt-copyright {
        .gt-link {
          transition: all 0.3s ease-in-out;
          color: var(--vp-c-brand);
          border-bottom-color: var(--vp-c-brand);
          
          &:hover {
            text-decoration: none;
            opacity: 0.85;
          }
        }
      }
      
      .gt-popup {
        top: 3em;
        color: var(--vp-c-brand);
        border-color: var(--vp-c-gutter);
        background-color: var(--vp-c-bg);
        
        .gt-action-login {
          transition: all 0.3s ease-in-out;
          color: var(--vp-c-brand);
          
          &:hover {
            opacity: 0.85;
          }
        }
        
        .gt-copyright {
          border-color: var(--vp-c-gutter);
        }
      }
      
      .gt-user {
        .gt-ico svg {
          fill: var(--vp-c-brand);
        }
      }
    }
    
    .gt-header {
      .gt-avatar-github {
        svg {
          fill: var(--vp-c-text-1);
        }
      }
      
      .gt-header-comment {
        .gt-header-textarea {
          background-color: var(--vp-c-bg-alt);
          
          &:hover {
            background-color: var(--vp-c-bg-alt);
          }
        }
        
        .gt-header-controls {
          .gt-header-controls-tip {
            transition: all 0.3s ease-in-out;
            color: var(--vp-c-brand);
            
            svg {
              fill: var(--vp-c-brand);
            }
            
            &:hover {
              opacity: 0.85;
            }
          }
          
          .gt-btn {
            border-color: var(--vp-c-brand);
            background-color: var(--vp-c-brand);
            
            &-login {
              transition: all 0.3s ease-in-out;
              
              &:hover {
                opacity: 0.85;
                border-color: var(--vp-c-brand);
                background-color: var(--vp-c-brand);
              }
            }
            
            &-preview {
              transition: all 0.3s ease-in-out;
              color: var(--vp-c-brand);
              background-color: var(--vp-c-bg);
              
              &:hover {
                opacity: 0.85;
                color: var(--vp-c-brand);
                border-color: var(--vp-c-brand);
                background-color: var(--vp-c-bg);
              }
            }
          }
        }
      }
    }
    
    .gt-spinner::before {
      border-top-color: var(--vp-c-brand);
    }
    
    
    .gt-comment-username {
      color: var(--vp-c-brand);
    }
  }
}
</style>

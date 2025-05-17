<script lang="ts">
  import type { Tool } from '../types';

  // Declare all props explicitly
  export let name: string;
  export let title: string;
  export let phone: string;
  export let address: string;
  export let email: string;
  export let image: string;
  export let bio: string;
  export let tools: Tool[];
  export let social: Record<string, string>;

  function downloadResume() {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.setAttribute('download', 'Resume.pdf');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>

<div class="lg:h-full lg:sticky top-0 glass">
  <div class="h-full p-8 lg:overflow-y-auto scrollbar-thin">
    <div class="flex flex-col items-center mb-8 max-w-sm mx-auto">
      <!-- Profile Image -->
      <div class="gradient-border mb-6">
        <img 
          src={image} 
          alt={name} 
          class="w-32 h-32 object-cover bg-white dark:bg-slate-800" 
        />
      </div>

      <!-- Name and Title -->
      <div class="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{name}</div>
      <p class="text-lg font-medium mb-4">{title}</p>

      <!-- Download Resume Button -->
      <button
        on:click={downloadResume}
        class="mb-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        Download Resume
      </button>

      <!-- Contact Information -->
      <div class="text-center text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed space-y-1">
        <p>{phone}</p>
        <p>{address}</p>
        <p>{email}</p>
      </div>

      <!-- Bio -->
      <p class="text-center text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">{bio}</p>
      
      <!-- Social Links -->
      <div class="flex space-x-6 mb-8">
        {#each Object.entries(social) as [platform, url]}
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={`Visit my ${platform} profile`}
            class="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <!-- Use icons for better UX -->
            {#if platform === 'github'}
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.593.111.787-.261.787-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492 1 .11-.776.42-1.304.76-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.771.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            {:else if platform === 'linkedin'}
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            {:else if platform === 'facebook'}
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-2.783v-3.47h2.783v-2.093c0-2.508 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 3.47h-2.33v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
              </svg>
            {/if}
          </a>
        {/each}
      </div>
    </div>

    <!-- Tools and Skills -->
    <div class="space-y-4 max-w-sm mx-auto">
      {#each tools as tool}
        <div class="gradient-border">
          <div class="glass p-4">
            <h3 class="text-sm font-medium mb-3 text-slate-600 dark:text-slate-400">{tool.name}</h3>
            <div class="flex flex-wrap gap-2">
              {#if tool.skills.length > 0}
                {#each tool.skills as skill}
                  <span class="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 
                             rounded-md text-xs border border-slate-200 dark:border-slate-700">
                    {skill}
                  </span>
                {/each}
              {:else}
                <span class="text-slate-400 italic">No skills listed</span>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<script lang="ts">
  import { onMount } from 'svelte';
  import ThemeToggle from './lib/ThemeToggle.svelte';
  import Profile from './lib/Profile.svelte';
  import Content from './lib/Content.svelte';

  // Import the JSON configuration
  import config from './data/config.json';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<div class="min-h-screen font-jakarta relative overflow-hidden transition-colors duration-200">
  {#if mounted}

    <!-- Theme toggle button -->
    <ThemeToggle />

    <!-- Main content layout -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-[400px,1fr] gap-8">
        <!-- Profile Section -->
        <Profile 
          name={config.name}
          title={config.title}
          phone={config.phone}
          address={config.address}
          email={config.email}
          image={config.image}
          bio={config.bio}
          social={config.social}
          tools={config.tools}
        />

        <!-- Content Section -->
        <Content
          projects={config.projects}
          education={config.education} 
          professionalExperience={config.professionalExperience}
          apprenticeships={config.apprenticeships}
          certificates={config.certificates}
          languages={config.languages}
          interests={config.interests}
        />
      </div>
    </div>
  {/if}
</div>
<script lang="ts">
  // Declare all props explicitly with default values
  export let projects: Array<{
    title: string;
    description: string;
    link: string;
    technologies: string[];
  }> = [];
  export let education: Array<{
    degree: string;
    school: string;
    year: string;
  }> = [];
  // export let research: Array<{
  //  title: string;
  //  publication: string;
  //  year: string;
  //  link: string;
  // }> = []; 
  export let professionalExperience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }> = [];
  export let apprenticeships: Array<{
    title: string;
    company: string;
    duration: string;
    location: string;
    description: string;
  }> = [];
  export let certificates: Array<{
    title: string;
    description: string;
  }> = [];
  export let languages: string[] = [];
  export let interests: string[] = [];
</script>

<div class="p-8 min-h-screen">
  <div class="max-w-4xl mx-auto space-y-16">
    <!-- Projects Section -->
    <section>
      <h1>Projects</h1>
      {#if projects.length > 0}
        <div class="grid gap-6 sm:grid-cols-2">
          {#each projects as project}
            <div class="gradient-border">
              <div class="glass p-5">
                <h2 class="text-base font-medium mb-2">{project.title}</h2>
                <p class="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each project.technologies as tech}
                    <span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  {/each}
                </div>
                {#if project.link}
                  <a href={project.link} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     class="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                    View Project →
                  </a>
                {:else}
                  <span class="text-sm text-slate-400 italic">No link available</span>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <p class="text-slate-500 italic">No projects available.</p>
      {/if}
    </section>

    <!-- Education Section -->
    <section>
      <h1>Education</h1>
      {#if education.length > 0}
        <div class="space-y-4">
          {#each education as edu}
            <div class="gradient-border">
              <div class="glass p-5">
                <h2 class="text-base font-medium mb-1">{edu.degree}</h2>
                <p class="text-slate-600 dark:text-slate-400 text-sm">{edu.school}</p>
                <p class="text-slate-500 dark:text-slate-500 text-sm">{edu.year}</p>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <p class="text-slate-500 italic">No education details available.</p>
      {/if}
    </section>

    <!-- Professional Experience Section -->
    <section>
      <h1>Professional Experience</h1>
      {#if professionalExperience.length > 0}
        <div class="space-y-4">
          {#each professionalExperience as exp}
            <div class="gradient-border">
              <div class="glass p-5">
                <h2 class="text-base font-medium mb-1">{exp.title}</h2>
                <p class="text-slate-600 dark:text-slate-400 text-sm">{exp.company}, {exp.duration}</p>
                <p class="text-slate-500 dark:text-slate-500 text-sm">{exp.description}</p>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <p class="text-slate-500 italic">No professional experience available.</p>
      {/if}
    </section>

    <!-- Apprenticeships Section -->
    <section>
      <h1>Apprenticeships</h1>
      {#if apprenticeships.length > 0}
        <div class="space-y-4">
          {#each apprenticeships as app}
            <div class="gradient-border">
              <div class="glass p-5">
                <h2 class="text-base font-medium mb-1">{app.title}</h2>
                <p class="text-slate-600 dark:text-slate-400 text-sm">{app.company}, {app.duration}</p>
                <p class="text-slate-500 dark:text-slate-500 text-sm">{app.location}</p>
                <p class="text-slate-500 dark:text-slate-500 text-sm">{app.description}</p>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <p class="text-slate-500 italic">No apprenticeship details available.</p>
      {/if}
    </section>

    <!-- Certificates Section -->
    <section>
      <h1>Certificates</h1>
      {#if certificates.length > 0}
        <div class="space-y-4">
          {#each certificates as cert}
            <div class="gradient-border">
              <div class="glass p-5">
                <h2 class="text-base font-medium mb-1">{cert.title}</h2>
                <p class="text-slate-500 dark:text-slate-500 text-sm">{cert.description}</p>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <p class="text-slate-500 italic">No certificates available.</p>
      {/if}
    </section>

    <!-- Languages Section -->
    <section>
      <h1>Languages</h1>
      {#if languages.length > 0}
        <ul class="flex flex-wrap gap-2">
          {#each languages as lang}
          <div class="gradient-border">
            <div class="glass p-5">
            <h2 class="text-base font-medium mb-1">
              {lang}
            </h2>
          </div>
        </div>
          {/each}
        </ul>
      {:else}
        <p class="text-slate-500 italic">No languages listed.</p>
      {/if}
    </section>

    <!-- Interests Section -->
    <section>
      <h1>Interests</h1>
      {#if interests.length > 0}
        <ul class="flex flex-wrap gap-2">
          {#each interests as interest}
          <div class="gradient-border">
            <div class="glass p-5">
            <h2 class="text-base font-medium mb-1">
              {interest}
            </h2>
          </div>
        </div>
          {/each}
        </ul>
      {:else}
        <p class="text-slate-500 italic">No interests listed.</p>
      {/if}
    </section>
  </div>
</div>


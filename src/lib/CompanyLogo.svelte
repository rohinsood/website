<script lang="ts">
  export let slug: string;
  const extensions: Record<string, string> = { nasa: 'svg' };
</script>

<span class="company-logo" class:company-logo-wide={slug === 'valley-consulting'}>
  <img src={'/images/companies/' + slug + '.' + (extensions[slug] || 'png')} alt="" width="112" height="64" />
</span>

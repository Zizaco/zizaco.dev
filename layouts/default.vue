<template>
  <div>
    <Html>
      <Head>
        <Title>zizaco.dev</Title>
        <Meta
          name="description"
          content="Zizaco's website"
        />
        <Meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <Link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@mdi/font@6.4.95/css/materialdesignicons.min.css"
        />
      </Head>
    </Html>

    <header class="menu">
      <Navbar />
    </header>

    <slot />
  </div>
</template>

<script setup></script>

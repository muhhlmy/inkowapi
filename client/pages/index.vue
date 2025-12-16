<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img
              src="/images/inkowapi.png"
              alt="INKOWAPI"
              class="h-8 lg:h-10 w-auto"
            />
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              class="text-gray-700 hover:text-emerald-700 font-medium text-sm"
              >Beranda</a
            >
            <a
              href="#"
              class="text-gray-700 hover:text-emerald-700 font-medium text-sm"
              >Profil</a
            >
            <a
              href="#"
              class="text-gray-700 hover:text-emerald-700 font-medium text-sm"
              >Anggota</a
            >
            <a
              href="#"
              class="text-gray-700 hover:text-emerald-700 font-medium text-sm"
              >Pendaftaran</a
            >
            <a
              href="#"
              class="text-gray-700 hover:text-emerald-700 font-medium text-sm"
              >Program Kerja</a
            >
            <a
              href="#"
              class="text-gray-700 hover:text-emerald-700 font-medium text-sm"
              >Data & Informasi</a
            >
            <a
              href="#"
              class="text-gray-700 hover:text-emerald-700 font-medium text-sm"
              >Galeri</a
            >
            <a
              href="#"
              class="bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-emerald-800 transition-colors"
              >Kontak</a
            >
          </div>

          <!-- Mobile menu button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="lg:hidden pb-4 space-y-2">
          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium"
            >Beranda</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium"
            >Profil</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium"
            >Anggota</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium"
            >Pendaftaran</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium"
            >Program Kerja</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium"
            >Data & Informasi</a
          >
          <a
            href="#"
            class="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md font-medium"
            >Galeri</a
          >
          <a
            href="#"
            class="block px-3 py-2 bg-emerald-700 text-white rounded-md font-medium text-center"
            >Kontak</a
          >
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-16 lg:pt-20">
      <div class="relative h-[500px] lg:h-[600px] overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            class="w-full h-full object-cover object-top"
          />
          <!-- Dark overlay for text readability -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"
          ></div>
        </div>

        <!-- Hero Content -->
        <div class="absolute inset-0 flex items-center">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div
              class="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 animate-fade-up animate-visible"
            >
              <h1
                class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg"
              >
                INKOWAPI: Induk Koperasi<br />
                Wanita Pengusaha Indonesia
              </h1>
              <p
                class="text-white/90 text-sm lg:text-base mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0 drop-shadow"
              >
                Anggota Koperasi Wanita yang Beranggotakan Wanita Pengusaha yang
                bergerak di berbagai bidang usaha kecil, mikro dan menengah,
                dimana sampai saat ini jumlahnya 128 Koperasi Wanita dengan
                Jumlah Anggota di Koperasi Wanita Mencapai 1 Juta Orang.
              </p>
              <button
                class="bg-white hover:bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold text-sm lg:text-base transition-colors shadow-lg"
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="relative -mt-16 z-10 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-800 rounded-2xl shadow-2xl p-6 lg:p-8"
        >
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
          >
            <!-- Stat 1: PUSKOWAPI -->
            <div
              class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all animate-fade-up delay-100"
            >
              <div
                class="w-10 h-10 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <p
                class="text-2xl lg:text-3xl font-bold text-white stat-number"
                data-target="34"
              >
                0
              </p>
              <p class="text-white/80 text-xs lg:text-sm mt-1">PUSKOWAPI</p>
            </div>

            <!-- Stat 2: KOWAPI -->
            <div
              class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all animate-fade-up delay-200"
            >
              <div
                class="w-10 h-10 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p
                class="text-2xl lg:text-3xl font-bold text-white stat-number"
                data-target="124"
              >
                0
              </p>
              <p class="text-white/80 text-xs lg:text-sm mt-1">KOWAPI</p>
            </div>

            <!-- Stat 3: Member -->
            <div
              class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all animate-fade-up delay-300"
            >
              <div
                class="w-10 h-10 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <p class="text-2xl lg:text-3xl font-bold text-white">
                1.7<span class="text-lg">Jt</span>
              </p>
              <p class="text-white/80 text-xs lg:text-sm mt-1">Anggota</p>
            </div>

            <!-- Stat 4: Asset -->
            <div
              class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all animate-fade-up delay-100"
            >
              <div
                class="w-10 h-10 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p class="text-2xl lg:text-3xl font-bold text-white">
                90.4<span class="text-lg">M</span>
              </p>
              <p class="text-white/80 text-xs lg:text-sm mt-1">Total Asset</p>
            </div>

            <!-- Stat 5: Omset -->
            <div
              class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all animate-fade-up delay-200"
            >
              <div
                class="w-10 h-10 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <p class="text-2xl lg:text-3xl font-bold text-white">
                128.6<span class="text-lg">M</span>
              </p>
              <p class="text-white/80 text-xs lg:text-sm mt-1">Omset Usaha</p>
            </div>

            <!-- Stat 6: Tenaga Kerja -->
            <div
              class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all animate-fade-up delay-300"
            >
              <div
                class="w-10 h-10 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p
                class="text-2xl lg:text-3xl font-bold text-white stat-number"
                data-target="500"
              >
                0
              </p>
              <p class="text-white/80 text-xs lg:text-sm mt-1">Tenaga Kerja</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sekilas Tentang INKOWAPI -->
    <section class="py-12 lg:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          <!-- Icon & Title -->
          <div class="flex items-center gap-4 flex-shrink-0 animate-fade-left">
            <div
              class="w-16 h-16 lg:w-20 lg:h-20 bg-emerald-700 rounded-xl flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 lg:w-10 lg:h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 class="text-xl lg:text-2xl font-bold text-gray-900">
              Sekilas Tentang<br />
              INKOWAPI
            </h2>
          </div>

          <!-- Description -->
          <div class="flex-1 animate-fade-right">
            <p class="text-gray-600 text-sm lg:text-base leading-relaxed">
              <span class="font-semibold text-emerald-700"
                >Anggota INKOWAPI</span
              >
              adalah Koperasi Wanita yang Beranggotakan Wanita Pengusaha yang
              bergerak di berbagai bidang usaha kecil, mikro dan menengah,
              dimana sampai saat ini jumlahnya 128 Koperasi Wanita dengan Jumlah
              Anggota di Koperasi Wanita Mencapai 1 Juta Orang.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- INKOWAPI GO DIGITAL Section -->
    <section class="py-12 lg:py-20 bg-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12 lg:mb-16 animate-fade-up">
          <h2 class="text-2xl lg:text-3xl font-bold text-emerald-700 mb-2">
            INKOWAPI GO DIGITAL
          </h2>
          <p class="text-gray-600 text-sm lg:text-base">
            INKOWAPI kini memiliki aplikasi digital kartu anggota
          </p>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <!-- Phone Mockups - Diagonal Staircase (Left-Bottom to Right-Top), Overlapping -->
          <div
            class="relative flex-shrink-0 w-[320px] lg:w-[480px] h-[400px] lg:h-[500px]"
          >
            <!-- Phone 1 (Left - Login) - Paling kiri bawah, paling depan -->
            <div
              class="absolute left-0 bottom-0 w-44 lg:w-52 z-10 transition-all duration-600 ease-out phone-animate phone-1"
            >
              <img
                src="/images/product-screen-1.png"
                alt="Login Screen"
                class="w-full h-auto drop-shadow-2xl"
              />
            </div>

            <!-- Phone 2 (Middle - Formulir) - Tengah, overlap dengan phone 1 & 3 -->
            <div
              class="absolute left-[70px] lg:left-[110px] bottom-[60px] lg:bottom-[80px] w-44 lg:w-52 z-20 transition-all duration-600 ease-out phone-animate phone-2"
            >
              <img
                src="/images/product-screen-2.png"
                alt="Registration Form"
                class="w-full h-auto drop-shadow-2xl"
              />
            </div>

            <!-- Phone 3 (Right - Dashboard) - Paling kanan atas, paling belakang -->
            <div
              class="absolute lg:left-[220px] right-0 bottom-[120px] lg:bottom-[160px] w-44 lg:w-52 z-30 transition-all duration-600 ease-out phone-animate phone-3"
            >
              <img
                src="/images/product-screen-3.png"
                alt="Dashboard"
                class="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          <!-- Content -->
          <div class="flex-1 text-center lg:text-left animate-fade-right">
            <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Kartu Tanda Anggota Digital<br />
              INKOWAPI
            </h3>
            <p class="text-gray-600 text-sm lg:text-base mb-6 leading-relaxed">
              Dengan semakin berkembangnya teknologi dan sudah beralih dalam era
              digital maka koperasi pun juga harus ikut maju agar tidak
              tertinggal. Selain itu digitalisasi adalah suatu keharusan karena
              berbagai manfaat dan kemudahan yg bisa didapatkan
            </p>

            <ul class="space-y-3 text-left">
              <li class="flex items-start gap-3">
                <span class="text-emerald-700 mt-1">•</span>
                <span class="text-gray-700 text-sm lg:text-base"
                  >Memudahkan pendataan anggota</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-700 mt-1">•</span>
                <span class="text-gray-700 text-sm lg:text-base"
                  >Kartu anggota INKOWAPI yang dibuat secara otomatis saat
                  pendaftaran</span
                >
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-700 mt-1">•</span>
                <span class="text-gray-700 text-sm lg:text-base"
                  >Dapat mencetak kartu anggota sendiri</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Manfaat Menjadi Anggota Section -->
    <section class="py-12 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12 lg:mb-16 animate-fade-up">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">
            Manfaat Menjadi Anggota
          </h2>
        </div>

        <!-- Benefits Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <!-- Benefit Card 1 -->
          <div
            class="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow animate-fade-up delay-100"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-emerald-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">
              Memiliki Jaringan Yang Luas
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Dengan menjadi anggota koperasi tentunya akan semakin menambah
              jaringan dan perluasan dalam pergaulan
            </p>
          </div>

          <!-- Benefit Card 2 -->
          <div
            class="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow animate-fade-up delay-200"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-emerald-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">
              Memiliki Jaringan Yang Luas
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Dengan menjadi anggota koperasi tentunya akan semakin menambah
              jaringan dan perluasan dalam pergaulan
            </p>
          </div>

          <!-- Benefit Card 3 -->
          <div
            class="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow animate-fade-up delay-300"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-emerald-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">
              Memiliki Jaringan Yang Luas
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Dengan menjadi anggota koperasi tentunya akan semakin menambah
              jaringan dan perluasan dalam pergaulan
            </p>
          </div>

          <!-- Benefit Card 4 -->
          <div
            class="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow animate-fade-up delay-400"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-emerald-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">
              Memiliki Jaringan Yang Luas
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Dengan menjadi anggota koperasi tentunya akan semakin menambah
              jaringan dan perluasan dalam pergaulan
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-emerald-800 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-sm">&copy; 2025 INKOWAPI. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const mobileMenuOpen = ref(false);

// Setup SEO
useHead({
  title: "INKOWAPI - Induk Koperasi Wanita Pengusaha Indonesia",
  meta: [
    {
      name: "description",
      content:
        "Induk Koperasi Wanita Pengusaha Indonesia (INKOWAPI) - Organisasi koperasi wanita dengan 128 koperasi anggota dan 1.7 juta member. Bergabunglah dengan jaringan pengusaha wanita terbesar di Indonesia.",
    },
    {
      name: "keywords",
      content:
        "INKOWAPI, Koperasi Wanita, Pengusaha Wanita, Indonesia, Organisasi Perdagangan",
    },
    {
      property: "og:title",
      content: "INKOWAPI - Induk Koperasi Wanita Pengusaha Indonesia",
    },
    {
      property: "og:description",
      content:
        "Bergabunglah dengan jaringan pengusaha wanita terbesar di Indonesia. 128 koperasi anggota dengan lebih dari 1.7 juta member.",
    },
    {
      property: "og:image",
      content: "/images/og-image.png",
    },
    {
      property: "og:url",
      content: "https://inkowapi.or.id",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "INKOWAPI - Induk Koperasi Wanita Pengusaha Indonesia",
    },
    {
      name: "twitter:description",
      content:
        "Bergabunglah dengan jaringan pengusaha wanita terbesar di Indonesia.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://inkowapi.or.id",
    },
  ],
});

// Structured Data (JSON-LD)
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "INKOWAPI",
  description: "Induk Koperasi Wanita Pengusaha Indonesia",
  url: "https://inkowapi.or.id",
  logo: "https://inkowapi.or.id/images/inkowapi.png",
  image: "/images/og-image.png",
  foundingDate: "1999",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "General Support",
    email: "info@inkowapi.or.id",
  },
  areaServed: "ID",
};

// Add JSON-LD structured data
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(jsonLdOrganization),
    },
  ],
});

// Count up animation for statistics
const animateCountUp = (element) => {
  const target = parseInt(element.getAttribute("data-target") || "0");
  const duration = 2000; // 2 seconds
  const start = 0;
  const startTime = performance.now();

  const updateCount = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (target - start) * easeOutQuart);

    element.textContent = current.toLocaleString("id-ID");

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    }
  };

  requestAnimationFrame(updateCount);
};

// Animate elements on scroll (like WOW.js)
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");

          // For phone mockups, add staggered animation
          const phones = entry.target.querySelectorAll(".phone-animate");
          phones.forEach((phone, index) => {
            setTimeout(() => {
              phone.classList.add("phone-visible");
            }, index * 200);
          });

          // For stat numbers, trigger count up animation
          const statNumbers = entry.target.querySelectorAll(".stat-number");
          statNumbers.forEach((stat) => {
            animateCountUp(stat);
          });
        }
      });
    },
    { threshold: 0.15 }
  );

  // Observe all animated elements
  document
    .querySelectorAll(
      ".animate-on-scroll, .animate-fade-up, .animate-fade-left, .animate-fade-right"
    )
    .forEach((el) => {
      observer.observe(el);
    });

  // Also observe phone section
  const phoneSection = document
    .querySelector(".phone-animate")
    ?.closest("section");
  if (phoneSection) {
    observer.observe(phoneSection);
  }

  // Observe statistics section
  const statsSection = document
    .querySelector(".stat-number")
    ?.closest("section");
  if (statsSection) {
    observer.observe(statsSection);
  }
});
</script>

<style scoped>
/* Custom styles for smooth transitions */
nav a {
  transition: color 0.2s ease;
}

/* Base animation states */
.animate-fade-up,
.animate-fade-left,
.animate-fade-right,
.animate-on-scroll {
  opacity: 0;
  transition: all 0.6s ease-out;
}

.animate-fade-up {
  transform: translateY(40px);
}

.animate-fade-left {
  transform: translateX(-40px);
}

.animate-fade-right {
  transform: translateX(40px);
}

.animate-on-scroll {
  transform: translateY(30px);
}

/* Visible states */
.animate-fade-up.animate-visible,
.animate-fade-left.animate-visible,
.animate-fade-right.animate-visible,
.animate-on-scroll.animate-visible {
  opacity: 1;
  transform: translate(0);
}

/* Stagger delays for cards */
.delay-100 {
  transition-delay: 0.1s;
}
.delay-200 {
  transition-delay: 0.2s;
}
.delay-300 {
  transition-delay: 0.3s;
}
.delay-400 {
  transition-delay: 0.4s;
}

/* Phone animation - fadeInUp like original website */
.phone-animate {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.6s ease-out;
}

.phone-animate.phone-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays - kiri ke kanan (phone-1 duluan, lalu phone-2, lalu phone-3) */
.phone-1 {
  transition-delay: 0s;
}

.phone-2 {
  transition-delay: 0.2s;
}

.phone-3 {
  transition-delay: 0.4s;
}
</style>

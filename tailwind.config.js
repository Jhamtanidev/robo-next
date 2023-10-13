/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "wendy-one": ["Wendy One", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        signup:
          'url("https://media.istockphoto.com/id/1152237432/photo/underwater-scene-tropical-seabed-with-reef-and-sunshine.jpg?s=612x612&w=0&k=20&c=qAe3eZ_bwmrq6CW5IoddV2icSDKsO7vkbQKwqy3ma0o=")',
        dashboard: 'url("/main.png")',
        contactus: 'url("/contactuss.png")',

        Lifi: 'url("https://media.istockphoto.com/id/1585551839/photo/li-fi-w-lan-internet-and-network-technology-enable-high-speed-li-fi-connections.webp?b=1&s=170667a&w=0&k=20&c=ValsNHHKcdyHykU_q6g0f0dVFqoS0nZFutlC8k8Hhsw=")',
        rov1: 'url("/assets/rov1.jpg")',
        rov2: 'url("https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1Ym1hcmluZXMlMjBzbWFsbCUyMHVuZGVyd2F0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60")',
        rov3: 'url("https://media.istockphoto.com/id/1499815056/photo/a-tourist-submarine-has-gone-missing-in-the-north-atlantic-mini-manned-submarine-to-explore.webp?b=1&s=170667a&w=0&k=20&c=aOFE0Ib9CQFwbmg47D3nwbfgnxwY3nHqvHl7wrH0NPE=")',
        cs: 'url("https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZWdyYXRlZCUyMGNvbnRyb2wlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60")',
        ls: 'url("https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2ZSUyMHZlZGlvJTIwc3RyZWFtaW5nJTIwb2YlMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60")',
        dm: 'url("/i1.png")',
        dl: 'url("/dm.png")',
        galery:
          'url("https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdhdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")',
      },

      colors: {
        "color-primary": "#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#6CB4EE",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "A427DF#",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      },
    },
  },
};

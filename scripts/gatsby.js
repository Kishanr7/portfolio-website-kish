const { spawnSync } = require('child_process');

const nodeOptions = new Set((process.env.NODE_OPTIONS || '').split(/\s+/).filter(Boolean));
nodeOptions.add('--openssl-legacy-provider');

const gatsbyCli = require.resolve('./gatsby-cli');
const result = spawnSync(process.execPath, [gatsbyCli, ...process.argv.slice(2)], {
  env: {
    ...process.env,
    GATSBY_TELEMETRY_DISABLED: '1',
    GATSBY_CPU_COUNT: process.env.GATSBY_CPU_COUNT || '2',
    NODE_OPTIONS: Array.from(nodeOptions).join(' '),
  },
  stdio: 'inherit',
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);

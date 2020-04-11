import Link from 'next/link';
import Head from 'next/head';
const linkStyle = {
  marginRight: 15,
};

export default () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
      </Head>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/batman">
        <a style={linkStyle}>Batman</a>
      </Link>
      <Link href="/quote">
        <a style={linkStyle}>Quote</a>
      </Link>
      <Link href="/cards">
        <a style={linkStyle}>Cards</a>
      </Link>
    </div>
  );
};

import { PrismaClient } from "@prisma/client";

import Link from "next/link";

// export async function getStaticProps() {
//   const prisma = new PrismaClient();
//   const songs = await prisma.song.findMany({
//     include: { artist: true }
//   }); // prisma in model  to findMany
//   return {
//     props: {
//       songs
//     }
//   };
// }

// export default ({ songs }) => (
//   <ul>
//     {songs.map((song) => (
//       <li key={song.id}>
//         <Link href="./songs/[id]" as={`./songs/${song.id}`}>
//           {song.name}
//         </Link>
//       </li>
//     ))}
//   </ul>
// );

// // export async function getStaticProps() {
// //   return {
// //     props: {
// //       songsie: [
// //         {
// //           id: 1,
// //           name: "Test Song",
// //         },
// //       ],
// //     },
// //   };
// // }

// // export default ({ songsie }) => (
// //   <ul>
// //     {songsie.map((song) => (
// //       <li key={song.id}>{song.name}</li>
// //     ))}
// //   </ul>
// // );

const prisma = new PrismaClient();
// Fetch all posts (in /pages/index.tsx)
export async function getStaticProps() {
  const posts = await prisma.post.findMany();
  return {
    props: { posts },
  };
}
// Display list of posts (in /pages/index.tsx)
export default ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);

export default async function Page({ params }) {
  const resolvedParams = await params;
  console.log(resolvedParams);
  let languages = ["python", "javascript", "java", "c++", "c#"];
  if (languages.includes(resolvedParams.slug)) {
    return <div>My Post:{resolvedParams.slug}</div>;
  } else {
    return <div>Post not found</div>;
  }
}

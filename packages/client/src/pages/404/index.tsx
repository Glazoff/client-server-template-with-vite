export default function NotFoundPage () {
  return (
    <>
      <button onClick={() => (window.location.href = "/")}>На главную страницу</button>
      <h1>Ошибка 404</h1>
    </>
  )
}

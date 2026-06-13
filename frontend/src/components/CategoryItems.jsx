import React, { useEffect, useState } from 'react'
import articleStyles from '../styles/Articles.module.css'
import styles from '../styles/Admin.module.css'

const BASE_URL = 'http://localhost:5000'

export default function CategoryItems({ category }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (token) setIsAdmin(true)

    async function fetchItems() {
      try {
        const res = await fetch(`${BASE_URL}/api/items`)
        const data = await res.json()

        setItems(
          Array.isArray(data)
            ? data.filter(
                i =>
                  (i.category || '').toLowerCase() ===
                  (category || '').toLowerCase()
              )
            : []
        )
      } catch (err) {
        console.error(err)
        setItems([])
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [category])

  const handleDelete = async (id) => {
    const token = localStorage.getItem('adminToken')

    await fetch(`${BASE_URL}/api/items/${id}`, {
      method: 'DELETE',
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    })

    setItems(prev => prev.filter(i => (i._id || i.id) !== id))
  }

  if (loading) return null

  return (
    <>
      <div className={articleStyles.grid}>
        {items.map(item => (
          <article key={item._id} className={articleStyles.card}>
            
            {/* IMAGES */}
            {item.files?.length > 0 && (
              <div>
                {item.files.map((f, idx) => (
                  <img
                    key={idx}
                    src={`${BASE_URL}${f.url}`}
                    alt={f.originalname}
                    onClick={() =>
                      setLightbox({
                        url: `${BASE_URL}${f.url}`,
                        name: f.originalname
                      })
                    }
                    style={{
                      width: '100%',
                      maxHeight: '300px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                      marginTop: '10px',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>
            )}

            <div className={articleStyles.cardBody}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>

              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer">
                  Open link
                </a>
              )}

              {isAdmin && (
  <button
    onClick={() => handleDelete(item._id)}
    className={styles.btn}
    style={{
      background: '#c0392b',
      marginLeft: '8px'
    }}
  >
    Delete
  </button>
)}
            </div>
          </article>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className={articleStyles.lightbox}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className={articleStyles.closeButton}
          >
            ✕
          </button>

          <img
            src={lightbox.url}
            alt={lightbox.name}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
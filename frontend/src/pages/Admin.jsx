import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/Admin.module.css'
import { useNavigate } from 'react-router-dom'


const API_URL = import.meta.env.VITE_API_URL

const initialLogin = {
  email: '',
  password: ''
}

const initialItem = {
  title: '',
  category: 'Article',
  description: '',
  link: ''
}

export default function Admin() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState(initialLogin)
  const [authenticated, setAuthenticated] = useState(false)
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')
  const [itemForm, setItemForm] = useState(initialItem)
  const [items, setItems] = useState([])
  const [selectedFiles, setSelectedFiles] = useState([])
  const fileInputRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => { 
  console.log('API_URL =', API_URL)
}, [])  

const handleDelete = async (id) => {
  if (!window.confirm('Delete this item?')) return

  try {
    const token = localStorage.getItem('adminToken')

    const res = await fetch(`${API_URL}/api/items/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (!res.ok) {
  const text = await res.text()
  throw new Error(text)
}

const data = await res.json()

    // ✅ instant UI update
    setItems(prev => prev.filter(i => (i._id || i.id) !== id))

  } catch (err) {
    console.error(err)
    setError(err.message)
  }
}

  const fetchItems = async () => {
    try {
      const response = await fetch(
        (`${API_URL}/api/items`)
      )
      const data = await response.json()
      console.log('Fetched items:', data)

      if (response.ok) {
        setItems(data)
      }
    } catch (err) {
      console.error('Failed to fetch items:', err)
    }
  }

  const handleLogin = async (event) => {
  event.preventDefault()

  try {
    const response = await fetch(
      `${API_URL}/api/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(
        data.message || 'Login failed'
      )
    }

    localStorage.setItem(
      'adminToken',
      data.token
    )

    setAuthenticated(true)
    setError('')
    setInfo('')
  } catch (error) {
    setError(error.message)
  }
}

  const handleForgotPassword = () => {
    if (!credentials.email.trim()) {
      setError('Enter your email first to get password help.')
      setInfo('')
      return
    }

    setError('')
    setInfo(
      `Password reset instructions sent to ${credentials.email}. Please check your inbox.`
    )

    setCredentials(prev => ({
      ...prev,
      password: ''
    }))

    setAuthenticated(false)
    setItemForm(initialItem)
  }

  useEffect(() => {
  const token = localStorage.getItem(
    'adminToken'
  )

  if (token) {
    setAuthenticated(true)
  }

  fetchItems()
}, [])

 const handleLogout = () => {
  localStorage.removeItem('adminToken')

  setAuthenticated(false)
  setCredentials(initialLogin)
  setItemForm(initialItem)
  setError('')
  setInfo('')
}

 const toggleShowPassword = () => {
  setShowPassword(prev => !prev)
 }

  const handleAddItem = async (event) => {
  event.preventDefault()

  if (!itemForm.title.trim()) {
    setError('Please enter a title before adding an item.')
    return
  }
  console.log(itemForm)
  try {
    setLoading(true)

    const token = localStorage.getItem('adminToken')

    let response
    const formData = new FormData()

formData.append('title', itemForm.title)
formData.append('category', itemForm.category)
formData.append('description', itemForm.description)
formData.append('link', itemForm.link)

console.log('Selected Files:', selectedFiles)

selectedFiles.forEach((file) => {
  formData.append('files', file)
})
console.log('itemForm:', itemForm)

for (let pair of formData.entries()) {
  console.log(pair[0], pair[1])
}

response = await fetch(`${API_URL}/api/items`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`
  },
  body: formData
})

    const newItem = await response.json()

    if (!response.ok) {
      throw new Error(
        newItem.message || 'Failed to save item'
      )
    }

    setItems(prev => [newItem, ...prev])

    setItemForm(initialItem)
    setSelectedFiles([])

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }

    setError('')
  } catch (err) {
    setError(err.message || 'Failed to save item')
  } finally {
    setLoading(false)
  }
}

  return (
    <section className={styles.admin} id="admin">
      <div className="container">
        <div className={styles.topBar}>
          <div>
            <h1 className="section-title">Admin Panel</h1>
            <p className="section-subtitle">
              Securely sign in and add new content items with the same site styling.
            </p>
          </div>

          <div className={styles.noteBox}>
            <p>Email and password are required to unlock the add form.</p>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Login Card */}
          <div className={styles.card}>
            <h2>Sign in</h2>

            <p className={styles.cardSubtitle}>
              Enter your admin credentials to start adding items.
            </p>

            <form
              className={styles.form}
              onSubmit={handleLogin}
            >
              <label>
                Email

                <input
                  type="email"
                  value={credentials.email}
                  onChange={(e) =>
                    setCredentials(prev => ({
                      ...prev,
                      email: e.target.value
                    }))
                  }
                  placeholder="admin@example.com"
                  required
                />
              </label>

              <label>
                Password

                <div className={styles.passwordWrapper}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials(prev => ({
                        ...prev,
                        password: e.target.value
                      }))
                    }
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    className={styles.toggleBtn}
                    onClick={toggleShowPassword}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-5 0-9.27-3.11-11-7 1.02-2.16 2.84-4.03 5.06-5.23"/><path d="M1 1l22 22"/></svg>
                    )}
                  </button>
                </div>
              </label>

              {error && (
                <p className={styles.error}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                className={styles.btn}
              >
                {authenticated
                  ? 'Signed in'
                  : 'Sign in'}
              </button>

              <div className={styles.extraActions}>
                <button
                  type="button"
                  className={styles.linkBtn}
                  onClick={handleForgotPassword}
                >
                  Forgot password?
                </button>

                {authenticated && (
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </div>

              {info && (
                <p className={styles.info}>
                  {info}
                </p>
              )}
            </form>
          </div>

          {/* Add Content Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <h2>Add content</h2>

                <p className={styles.cardSubtitle}>
                  Create a new item and preview it instantly.
                </p>
              </div>

              {authenticated && (
                <button
                  className={styles.btn}
                  onClick={handleLogout}
                  type="button"
                >
                  Logout
                </button>
              )}
            </div>

            {authenticated ? (
              <>
                <form
                  className={styles.form}
                  onSubmit={handleAddItem}
                >
                  <label>
                    Title

                    <input
                      value={itemForm.title}
                      onChange={(e) =>
                        setItemForm(prev => ({
                          ...prev,
                          title: e.target.value
                        }))
                      }
                      placeholder="Content title"
                      required
                    />
                  </label>

                  <label>
                    Category

                    <select
                      value={itemForm.category}
                      onChange={(e) =>
                        setItemForm(prev => ({
                          ...prev,
                          category: e.target.value
                        }))
                      }
                    >
                      <option>Article</option>
                      <option>Book</option>
                      <option>Poetry</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label>
                    Description

                    <textarea
                      rows={4}
                      value={itemForm.description}
                      onChange={(e) =>
                        setItemForm(prev => ({
                          ...prev,
                          description: e.target.value
                        }))
                      }
                      placeholder="Write a short description"
                    />
                  </label>

                  <label>
                    Attach files

                      <div className={styles.fileInputWrapper}>
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          className={styles.fileInput}
                          onChange={(e) =>
                            setSelectedFiles(Array.from(e.target.files))
                          }
                        />

                        <button
                          type="button"
                          className={styles.fileBtn}
                          onClick={() => fileInputRef.current && fileInputRef.current.click()}
                        >
                          Choose files
                        </button>

                        <span className={styles.fileHint}>You can attach multiple files</span>
                      </div>

                      {selectedFiles.length > 0 && (
                        <div className={styles.fileList}>
                          {selectedFiles.map((f, idx) => (
                            <div key={idx} className={styles.fileItem}>
                              {f.name}
                            </div>
                          ))}
                        </div>
                      )}
                  </label>

                  <label>
                    Link (optional)

                    <input
                      type="url"
                      value={itemForm.link}
                      onChange={(e) =>
                        setItemForm(prev => ({
                          ...prev,
                          link: e.target.value
                        }))
                      }
                      placeholder="https://example.com"
                    />
                  </label>

                  <button
                    type="submit"
                    className={styles.btn}
                    disabled={loading}
                  >
                    {loading
                      ? 'Saving...'
                      : 'Add item'}
                  </button>
                </form>

                <div className={styles.itemsSection}>
                  <h3>Saved Items</h3>

                  {items.length === 0 ? (
                    <p className={styles.empty}>
                      No items added yet.
                    </p>
                  ) : (
                    <div className={styles.itemsList}>
                        {items.map(item => (
  <article
    key={item._id || item.id}
    className={styles.itemCard}
    data-aos="fade-up"
    onClick={() => setLightbox(item.files?.[0] || null)}
  >

    {/* PREVIEW */}
    <div className={styles.itemPreview}>
      {item.files?.[0] ? (
        <img
          src={`${API_URL}${item.files[0].url}`}
  alt={item.title}
          className={styles.previewImage}
        />
      ) : (
        <div className={styles.previewFallback}>
          <span>📄</span>
          <p>No Preview</p>
        </div>
      )}

      <div className={styles.previewOverlay}>
        <span>Click to view</span>
      </div>
    </div>

    {/* BODY */}
    <div className={styles.itemBody}>

      <div className={styles.itemMeta}>
        <strong>{item.category}</strong>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Open
          </a>
        )}
      </div>

      <h4>{item.title}</h4>

      {item.description && <p>{item.description}</p>}

      {/* ACTIONS */}
      <div className={styles.itemActions}>

        <button
          className={styles.viewBtn}
          onClick={(e) => {
            e.stopPropagation()
            setLightbox(item.files?.[0] || null)
          }}
        >
          👁 View
        </button>

        <button
          className={styles.deleteBtn}
          onClick={(e) => {
            e.stopPropagation()
            handleDelete(item._id || item.id)
          }}
        >
          🗑 Delete
        </button>

      </div>
    </div>
  </article>
))}
</div>
                  )}
                  </div>
{lightbox && (
  <div
    className={styles.lightbox}
    onClick={() => setLightbox(null)}
  >
    <button
      className={styles.closeBtn}
      onClick={(e) => {
        e.stopPropagation()
        setLightbox(null)
      }}
    >
      ✕
    </button>

    <img
      src={`${API_URL}${lightbox.url}`}
      alt="preview"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
              </>
            ) : (
              <div className={styles.locked}>
                <p>
                  Sign in first to enable the admin add form.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

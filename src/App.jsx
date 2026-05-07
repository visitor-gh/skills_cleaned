import { useEffect, useState } from 'react'

export default function App() {
  const [skills, setSkills] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/skills_cleaned.json')
      .then(res => res.json())
      .then(data => setSkills(data))
  }, [])

  const filtered = skills.filter(skill =>
    skill.command.toLowerCase().includes(search.toLowerCase()) ||
    skill.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container">
      <h1>AI Skill Commands</h1>

      <input
        placeholder="/command 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map(skill => (
          <div className="card" key={skill.command}>
            <h2>{skill.command}</h2>
            <p>{skill.name}</p>
            <span>{skill.summary}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

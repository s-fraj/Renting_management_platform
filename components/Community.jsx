function Community() {
  return (
    <section className="community-section">
      <article className="card community-card">
        <div className="community-content">
          <span className="community-label">Connect &amp; Socialize</span>
          <h2>Student Community</h2>
          <p>
            Don&apos;t navigate campus life alone. Find roommates who share your vibe,
            organize study groups, or coordinate weekend carpools with fellow UniRenters.
          </p>
          <div className="community-buttons">
            <a className="btn btn-primary" href="#">Search Roommates</a>
            <a className="btn btn-secondary" href="#">Join Discussion</a>
          </div>
        </div>

        <div className="community-highlights">
          <div className="community-tile">
            <div className="community-tile-header">
              <img
                alt="Avatar"
                className="avatar-image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvszxiNPKvhshX3jx9rY0Lbj-jGl77Y97U2-1Hj-jCXqgra9ajMowS1Meo2zpHh_uVzVu0k2ADtNXIl4ZeXFp32_UGkvzR-EYoanjcU5CcUQBwQiglL0_7EGpNtOfXvuiaa-qDymdGUJhxsA4TNWNDI-D7FRhYGI6mAFJAVRtG4ZiwXEuVTZnE9pQUrA_n1itAofqttR8LV3GUDnbSgGcT40B-J7tEDwR-aMeq1mHV7Cq46FfH4CKvmT3TK4WVk8LiWsCbxyHUxUQ"
              />
              <div>
                <p className="tile-title">Sarah B.</p>
                <p className="tile-meta">Engineering Student</p>
              </div>
            </div>
            <p>&quot;Found my best friend and roommate through UniRent!&quot;</p>
          </div>

          <div className="community-tile">
            <div className="community-tile-header">
              <div className="badge badge-glow">New Topic</div>
              <div>
                <p className="tile-title">32 active users</p>
              </div>
            </div>
            <p className="tile-highlight">Best study spots in Sousse?</p>
          </div>

          <div className="community-tile">
            <div className="community-tile-header">
              <img
                alt="Avatar"
                className="avatar-image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-SpHZC33hxl6xCw9NP0vttq9SRpgJ0wNZq2vX465hEm4PSdutMelkdDRsoib-t05DJD5tjAxZpeMt_S9tNYfMkDeKjVXbGQEeHYbYBLQKIvyqbjM5D4F8VX4ON3ErxUFyPD-xylFZUkVZ7fWz1AuF9UDPnR8TwVFP7W9_r8cGRuCkBR129zCnORnwwPmQjq83vgmzxwSvp1ZiVBl2U7y2wpp89jh-tu1Aj1O0NxP2S1ZPBv-nSgvl4-Z1QhfXMfcl-h11u_3uilE"
              />
              <div>
                <p className="tile-title">Ahmed K.</p>
                <p className="tile-meta">Business School</p>
              </div>
            </div>
            <p className="tile-highlight">Carpool to Tunis available every Friday.</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Community;

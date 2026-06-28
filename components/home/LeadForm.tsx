import Link from "next/link";

export function LeadForm() {
  return (
    <div className="lead-form lead-form-coming" role="note">
      <h3>The 40+ Reset Checklist is coming soon.</h3>
      <p>
        We are still building our email setup, so we are not collecting sign-ups
        yet. Nothing is sent and no details are stored right now. In the
        meantime, you can start with the full guide.
      </p>
      <Link className="button button-primary lead-submit" href="/weight-loss-after-40">
        Read the 40+ guide
      </Link>
    </div>
  );
}

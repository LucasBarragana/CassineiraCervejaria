/*
  # Grant access to user orders view

  1. Changes
    - Grant SELECT permission on stripe_user_orders view to authenticated users
*/

-- Grant access to user orders view
GRANT SELECT ON stripe_user_orders TO authenticated;
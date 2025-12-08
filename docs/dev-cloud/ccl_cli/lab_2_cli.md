# AWS Identity Access Management (IAM)


## Part 2: AWS CLI & CloudShell (Imperative Action)


- You don't need to copy the Console Login URL every time. It is always:
	`https://<your-account-alias>.signin.aws.amazon.com/console`
    
### Commands to replicate : Create a Group, a User, add the User to the Group, and create an Alias.

**Compatibility:** These commands work identically in **Local Terminal** and **AWS CloudShell**.

**1. Create the Account Alias**

```bash
aws iam create-account-alias --account-alias my-cloud-learning-lab
```

**2. Create the Group**

```bash
aws iam create-group --group-name Developers
```

**3. Attach the Administrator Policy to the Group**

- _Note:_ We use the ARN (Amazon Resource Name) for the managed policy.
    
```bash
aws iam attach-group-policy \
    --group-name Developers \
    --policy-arn arn:aws:iam::aws:policy/AdministratorAccess
```

- `--policy-arn`: This acts like a pointer to the specific rulebook (Policy) owned by AWS.

**4. Create the User**

```bash
aws iam create-user --user-name student1
```

**5. Add User to the Group**

```bash
aws iam add-user-to-group --group-name Developers --user-name student1
```

**6. Create Console Password (Login Profile)**

This command creates the password required for the user to log in to the web console. `--password-reset-required` forces them to change it on first login.

```bash
aws iam create-login-profile \
    --user-name student1 \
    --password "TemporaryPass123!" \
    --password-reset-required
```

These commands work identically in AWS CloudShell. However, CloudShell has the "glitch" where pasting multi-line commands (with `\`) sometimes fails. It is safer to type them as one long line in CloudShell.

    
## Part 3: Terraform (Declarative Automation)

In the CLI, you ran 6 separate commands. If one failed, you'd be stuck halfway. In Terraform, we define the Relationship. We say "This User belongs to this Group," and Terraform figures out the order.

1. The Code (`main.tf`)

- **Note:** We will create the User and Group. However, creating the **Login Profile (Password)** in Terraform is considered a **security risk** (because the password creates a permanent record in the Terraform state file). Usually, you create the user infrastructure via Terraform, and the user sets their password manually via a "Forgot Password" flow or an admin sets it once in the console.
    
```terraform
provider "aws" {
  region = "us-east-1"
	  # Terraform will automatically use your "aws configure" credentials
}

		# 1. Create the Account Alias
resource "aws_iam_account_alias" "alias" {
  account_alias = "my-terraform-learning-lab-99" # Must be globally unique
}

		# 2. Create the IAM Group
resource "aws_iam_group" "dev_group" {
  name = "Developers"
}

		# 3. Create the IAM User
resource "aws_iam_user" "new_user" {
  name = "student1"
  
	  # Tags help track who owns this resource
  tags = {
    Description = "Created via Terraform"
  }
}

		# 4. Add User to Group
resource "aws_iam_group_membership" "team" {
  name = "tf-dev-group-membership"

  users = [
    aws_iam_user.new_user.name,
  ]

  group = aws_iam_group.dev_group.name
}

		# 5. Attach Policy to Group
resource "aws_iam_group_policy_attachment" "admin_attach" {
  group      = aws_iam_group.dev_group.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}
```

**3. The Workflow**

1. **Initialize:** Downloads the AWS plugins.
    
    ```bash
    terraform init
    ```
    
2. **Plan:** Shows you that it will create 5 resources (Alias, Group, User, Membership, PolicyAttachment).
    
    ```bash
    terraform plan
    ```
    
3. **Apply:** Builds the resources in your account.
    
    ```bash
    terraform apply
    # Type 'yes' when prompted
    ```
    
4. **Verify:** Go to your AWS Console, check IAM, and see the user `student1` inside the group `Developers`.
    
5. **Clean Up:** Deletes everything.
    
    ```bash
    terraform destroy
    ```
    

<script>
  import { useForm, validators, HintGroup, Hint, email, required } from "svelte-use-form";

  const form = useForm();
</script>
<form use:form>
  <h1>Login</h1>

  <input type="email" name="email" use:validators={[required, email]} placeholder="Email"/>
  <HintGroup for="email">
    <Hint on="required">This is a mandatory field</Hint>
    <Hint on="email" hideWhenRequired>Email is not valid</Hint>
  </HintGroup>

  <input type="password" name="password" use:validators={[required]} placeholder="Password"/>
  <Hint for="password" on="required">This is a mandatory field</Hint>

  <button disabled={!$form.valid}>Login</button>
</form>

<style>
	:global(.touched:invalid) {
		border-color: red;
		outline-color: red;
	}
</style>